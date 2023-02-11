import L from "leaflet";
import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import useQueryParams from "../../hooks/useQueryParams";
import "./FullScreenMap.scss";
import pirateFlag from "../../assets/pirateFlag.png";
import BoatMapMarker from "../BoatMapMarker/BoatMapMarker";

const FullScreenMap = () => {
  const queryParams = useQueryParams();
  const coords = queryParams.get("coords");

  const lat = coords ? Number(coords?.split(",")[0].trim()) : 64.581;
  const long = coords ? Number(coords?.split(",")[1].trim()) : 12.601;

  const blueIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [15, 22],
    iconAnchor: [10, 20],
    popupAnchor: [1, -34],
    shadowSize: [20, 20],
  });
  const greenIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [30, 55],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const pirateIcon = L.icon({
    iconUrl: pirateFlag,
    iconSize: [48, 60], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      center={[lat, long]}
      zoom={10}
      scrollWheelZoom={true}
      className="fullScreenMap__container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={pirateIcon} position={[59.8107717, 10.5084803]}>
        <Popup>
          <h2>Possible pirates</h2>
          <p>
            <b>Type: </b> Pirate ship
          </p>
          <p>
            <b>lat: </b>
            {59.8107717}, <b>long: </b>
            {10.5084803}
          </p>
        </Popup>
      </Marker>
      <Marker icon={greenIcon} position={[59.77328, 10.58774]}>
        <Popup>
          <h2>KNM Fridtjof Nansen</h2>
          <p>
            <b>Type: </b> Military vessel
          </p>
          <p>
            <b>lat: </b>
            {59.77328}, <b>long: </b>
            {10.58774}
          </p>
        </Popup>
      </Marker>
      <Marker icon={blueIcon} position={[59.774863, 10.553893]}>
        <Popup>
          <h2>THUN EQUALITY</h2>
          <p>
            <b>Type: </b> Tanker
          </p>
          <p>
            <b>lat: </b>
            {59.774863}, <b>long: </b>
            {10.553893}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default FullScreenMap;
