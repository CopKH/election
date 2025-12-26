"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine'
import { useEffect } from 'react';

// แก้ไข Bug ไอคอน Marker ไม่แสดงใน Next.js
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "unpkg.com",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface FreeMapProps {
  lat: number;
  lng: number;
  name: string;
}


L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});



export default function FreeMap({ lat, lng, name }: FreeMapProps) {

  return (
    <MapContainer 
      center={[lat, lng]} 
      zoom={16} 
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="www.openstreetmap.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
