'use client';
import { useEffect, useState } from 'react';
import { useAppStore, useSearch } from '@/store/useAppStore';
import EventCard from '@/components/EventCard/EventCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import Header from '@/components/Header/Header';
import s from './page.module.scss';

export default function EventsPage() {
  const { events, loadInitialData, isLoading } = useAppStore();
  const { searchQuery, setSearchQuery } = useSearch();
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  useEffect(() => {
    if (events.length === 0) {
      loadInitialData();
    }
  }, [events.length]); // Removed loadInitialData from deps to prevent infinite loop

  const cities = Array.from(new Set(events.map(event => event.city)));

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    const matchesCity = selectedCity === 'all' || event.city === selectedCity;
    
    return matchesSearch && matchesStatus && matchesCity;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const otherEvents = filteredEvents.filter(event => event.status !== 'upcoming');

  if (isLoading) {
    return (
      <div className={s.page}>
        <Header />
        <main className={s.main}>
          <div className={s.loading}>Loading events...</div>
        </main>
      </div>
    );
  }

  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <div className={s.header}>
          <h1 className={s.title}>Live Events</h1>
          <p className={s.subtitle}>Discover concerts and live performances</p>
        </div>

        <div className={s.filters}>
          <SearchBar
            placeholder="Search events, artists, venues..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
          
          <div className={s.filterRow}>
            <div className={s.statusFilters}>
              <span className={s.filterLabel}>Status:</span>
              {(['all', 'upcoming', 'ongoing', 'completed'] as const).map(status => (
                <button
                  key={status}
                  className={`${s.filterButton} ${selectedStatus === status ? s.active : ''}`}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>

            <div className={s.cityFilters}>
              <span className={s.filterLabel}>City:</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={s.citySelect}
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Upcoming Events</h2>
            <div className={s.eventsGrid}>
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {otherEvents.length > 0 && (
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Other Events</h2>
            <div className={s.eventsGrid}>
              {otherEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {filteredEvents.length === 0 && (
          <div className={s.noResults}>
            <h3>No events found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}
