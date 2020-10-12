import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Grid, Cell, Layout } from 'react-mdl';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
}

from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";

import mapStyles from "./mapStyles";

/*import Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
*/
const libraries = ["places"];
const mapContainerStyle = {
    width: "50vw",
    height: "50vh",
};
const center = {
    lat: 59.330190,
    lng: 18.645860,
};
const options = {
    style: mapStyles, 
    disableDefaultUI : true, 
    zoomControl: true,
};

export default function App() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div className="contact-body">
            <Layout className="backgroundImage">
                <Grid className="">
                    <Cell className="title" style={{fontSize: '25px', color: 'black', fontFamily: 'Secular One' }}>
                        <h1>Contact Us <br/>
                            <i class="fas fa-phone-volume"></i> 08 400 548 02 <br/>
                            Questions & support <br/>
                            <i class="fas fa-envelope-open"></i> info@Vinden.com<br/>
                            Partnership & Sales <br/>
                            <i class="fas fa-envelope-open"></i> partnership@Vinden.com<br/>
                            Press<br/>
                            <i class="fas fa-envelope-open"></i> press@Vinden.com
                        </h1>
                    </Cell>
                    <Cell className="title" >
                        <GoogleMap 
                            mapContainerStyle={mapContainerStyle}
                            zoom={10}
                            center={center}
                            options={options}
                            onClick={(event) => { 
                            setMarkers(current => [...current,{
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                            time: new Date(),
                            },
                                ]);
                                 }}
                        >
                        {markers.map((marker => (
                        <Marker 
                            key={marker.time.toISOString()}
                            position={{ lat: marker.lat, lng: marker.lng}}
                            icon={{url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjU1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTS4wMTMuMDg1aDU2LjI0OXY1NC4xMjJILjAxM3oiLz48cGF0aCBpZD0iYyIgZD0iTS4wOC4wNDdoNzAuMTYxdjMyLjQ5SC4wODF6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTQwLjA2NCAyMC4yODloMTQuNjA0VjUuNzE3SDQwLjA2NHYxNC41NzJ6bS04LjA5OSAxNi4xNjNINDYuNTdWMjEuODhIMzEuOTY1djE0LjU3MnptLTguMDk5IDE2LjE2NEgzOC40N1YzOC4wNDNIMjMuODY2djE0LjU3M3ptLTYuMDc0LTE0LjU3M2g0LjQ4djEzLjg4MmwtNC40OC0yLjk4VjM4LjA0MnpNOS42OTMgMjEuODhoNC40OHYxMy44OGwtNC40OC0yLjk4di0xMC45ek0xLjU5NCAyLjM2N2w0LjQ4IDIuOTh2MTQuMjUxbC00LjQ4LTIuOThWMi4zNjd6bTcuMDYtLjY5MWwzLjY4MyAyLjQ1SDcuMTEzTDMuNDMgMS42NzZoNS4yMjV6bTExLjc4MyAyLjQ1aC01LjIyNWwtMy42ODMtMi40NWg1LjIyNWwzLjY4MyAyLjQ1em00LjQxNiAxMy43MTNsMy42ODIgMi40NWgtNC42Njl2LTIuNDVoLjk4N3pNMzguNDcgNS4zNDd2MTQuMjUxbC00LjQ4LTIuOThWMi4zNjdsNC40OCAyLjk4ek0zMS40MSAyMC4yOWwtMy42ODMtMi40NWg1LjIyNGwzLjY4MyAyLjQ1SDMxLjQxem0tMjMuNzQxIDBoMTQuNjAzVjUuNzE3SDcuNjd2MTQuNTcyem0xNS40IDE2LjE2M2gtNy4zMDFWMjEuODhIMzAuMzd2MTQuNTcyaC03LjMwMnpNNDEuMDUgMS42NzZsMy42ODMgMi40NUgzOS41MWwtMy42ODMtMi40NWg1LjIyNHptMTEuNzgyIDIuNDVoLTUuMjI0bC0zLjY4My0yLjQ1aDUuMjI0bDMuNjgzIDIuNDV6bTMuNDMuNzg2YS44MDYuODA2IDAgMDAtLjAxNi0uMTQ1bC0uMDA4LS4wMzJhLjc0Mi43NDIgMCAwMC0uMDMzLS4xMDVsLS4wMi0uMDQ3YS43NzMuNzczIDAgMDAtLjEzNi0uMmwtLjAzLS4wMzJhLjgwOC44MDggMCAwMC0uMDk1LS4wNzhsLS4wMTUtLjAxMi0uMDAyLS4wMDJMNDkuODMzLjIyYS43OTguNzk4IDAgMDAtLjQ0Mi0uMTM0SDMzLjE5M2EuNzk0Ljc5NCAwIDAwLS42LjI3Mi43OTIuNzkyIDAgMDAtLjE5Ny41MnYxNS4zNzFoLTguNTNWNC45MTFhLjc4OC43ODggMCAwMC0uMDE1LS4xNDRsLS4wMS0uMDM1YS43OTIuNzkyIDAgMDAtLjAzMS0uMTAxbC0uMDIyLS4wNDlhLjgyMi44MjIgMCAwMC0uMDQzLS4wOGMtLjAxLS4wMTQtLjAxOS0uMDI5LS4wMy0uMDQzYS44MTguODE4IDAgMDAtLjA2LS4wNzRjLS4wMS0uMDExLS4wMi0uMDIzLS4wMzItLjAzNGEuODA1LjgwNSAwIDAwLS4wOS0uMDc1Yy0uMDA4LS4wMDUtLjAxMy0uMDExLS4wMi0uMDE2aC0uMDAyTDE3LjQzNy4yMTdhLjc5OC43OTggMCAwMC0uNDQyLS4xMzNILjc5N2EuNzk1Ljc5NSAwIDAwLS42LjI3Mi43OTMuNzkzIDAgMDAtLjE5Ny41MnYxNi4xNjdjMCAuMjY2LjEzMy41MTQuMzU1LjY2Mmw2LjA3IDQuMDM3LjAwMi4wMDIuMDAyLjAwMWMuMDM5LjAyNi4wOC4wNDcuMTIuMDY1bC4wMzkuMDE1YS44MDQuODA0IDAgMDAuMjgzLjA1NEg4LjF2MTEuMzI3YzAgLjI2Ni4xMzMuNTE0LjM1NS42NjJsNi4wNyA0LjAzOGguMDAxbC4wMDMuMDAzYy4wNC4wMjUuMDguMDQ2LjEyMS4wNjVsLjAzNi4wMTRhLjgxMy44MTMgMCAwMC4xMDMuMDMxbC4wMzguMDA5YS43OC43OCAwIDAwLjE0NC4wMTRoMS4yMjhWNDkuMzdjMCAuMjY2LjEzMy41MTUuMzU1LjY2Mmw2LjA3IDQuMDM4aC4wMDFsLjAwMy4wMDNjLjAzOS4wMjYuMDguMDQ3LjEyLjA2NWwuMDM3LjAxNGEuODEzLjgxMyAwIDAwLjEwMy4wMzJsLjAzOC4wMDhhLjc4Ljc4IDAgMDAuMTQzLjAxNWgxNi4xOThjLjQ0IDAgLjc5Ny0uMzU3Ljc5Ny0uNzk2VjM4LjA0M2g3LjMwMmMuNDQgMCAuNzk3LS4zNTYuNzk3LS43OTVWMjEuODhoNy4zMDJjLjQ0IDAgLjc5Ny0uMzU2Ljc5Ny0uNzk1VjQuOTExeiIgZmlsbD0iIzE0MTUxMyIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGQ9Ik02Mi4yMjUgMzMuNzloNi41OTVsNC44NTcgMTIuODk1TDc4LjQ5IDMzLjc5aDYuNjRsLTguODI0IDIwLjc2NmgtNS4zMDJsLTguNzgtMjAuNzY2TTg3LjQ0IDU0LjU1Nmg2LjE0OVYzMy43OWgtNi4xNXYyMC43NjZ6bTMuMDc0LTMyLjA2YzIuMDk1IDAgMy43ODggMS41NTYgMy43ODggMy42MDEgMCAyLjA0Ni0xLjY5MyAzLjY0Ny0zLjc4OCAzLjY0Ny0yLjA5NCAwLTMuODc2LTEuNjAxLTMuODc2LTMuNjQ3IDAtMi4wNDUgMS43ODItMy42MDEgMy44NzYtMy42MDF6IiBmaWxsPSIjMTQxNTEzIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuNDEyIDIyLjQ0OSkiPjxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNjIi8+PC9tYXNrPjxwYXRoIGQ9Ik02LjI3NCAzMi4xMDdILjA4VjExLjM0aDYuMTk0djMuMDI0YzEuMTE0LTIuMDkgMy41NjUtMy40NjkgNi4wMTYtMy40NjkgNC42NzkgMCA3LjYyIDIuODkgNy42MiA4LjgwNXYxMi40MDZoLTYuMTk0VjIxLjAzNGMwLTIuNzU2LTEuNTE1LTQuMTM1LTMuNjEtNC4xMzUtMi4xODMgMC0zLjgzMiAxLjA2Ny0zLjgzMiA0LjIyNHYxMC45ODRtMjcuNzkzLTE1LjM4NmMtMi42MyAwLTQuODEzIDEuOTU3LTQuODEzIDQuOTM2IDAgMy4wNjggMi4xODQgNS4wMjUgNC44MTMgNS4wMjUgMi41ODUgMCA0LjgxMy0yLjA0NiA0LjgxMy01LjAyNSAwLTMuMTEzLTIuMjczLTQuOTM2LTQuODEzLTQuOTM2em00Ljk0NiAxNS4zODZ2LTIuNThjLTEuMDI1IDEuOTEzLTMuNTIgMy4wMjQtNi4xMDUgMy4wMjQtNS4zNDcgMC0xMC4wNy00LjIyNC0xMC4wNy0xMC43NiAwLTYuNjcgNC43MjMtMTAuODk1IDEwLjA3LTEwLjg5NSAyLjU4NSAwIDUuMDggMS4wNjggNi4xMDUgMi45OFYuMDQ1aDYuMTV2MzIuMDZoLTYuMTV6bTI0Ljk5LTEyLjIyOWMtLjMxMi0yLjUzNC0yLjYzLTMuNTU3LTQuMzY3LTMuNTU3LTEuNzM4IDAtNC4xLjkzNC00LjYzNCAzLjU1N2g5LjAwMXptNS4wOCA4LjQ0OWMtMi4wOTUgMy4xMTMtNS45NzEgNC4yMjQtOS40OTIgNC4yMjQtNS45NyAwLTEwLjg3My00LjM1OC0xMC44NzMtMTAuODk0IDAtNi41MzYgNC45MDItMTAuNzYgMTAuODczLTEwLjc2IDUuOTI3IDAgMTAuNjUgNC40MDIgMTAuNjUgMTAuOTM4IDAgLjUzNC0uMDQ0IDEuMzc4LS4wODkgMS45MTJoLTE1LjI0Yy4zMTIgMi40MDEgMi45NDIgMy40NjggNS4xMjUgMy40NjggMS42OTMgMCAzLjUyLS42MjIgNC41NDUtMS45NTZsNC41IDMuMDY4eiIgZmlsbD0iIzE0MTUxMyIgbWFzaz0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJNMTc3LjE4IDU0LjU1NmgtNi4xOTNWMzMuNzloNi4xOTR2My4wMjRjMS4xMTQtMi4wOSAzLjU2NC0zLjQ2OSA2LjAxNS0zLjQ2OSA0LjY4IDAgNy42MiAyLjg5IDcuNjIgOC44MDV2MTIuNDA2aC02LjE5NFY0My40ODNjMC0yLjc1Ny0xLjUxNS00LjEzNS0zLjYxLTQuMTM1LTIuMTgzIDAtMy44MzEgMS4wNjctMy44MzEgNC4yMjR2MTAuOTg0IiBmaWxsPSIjMTQxNTEzIi8+PC9nPjwvc3ZnPg==",
                            scaledSize: new window.google.maps.Size(60, 60), 
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(35, 35),
                        }}
                                /* coordinate={{latitude: 59.34 , longitude: 18.6}}
                                title={'Vinden'}*/
                        />
                        )))}
                        </GoogleMap>
                    </Cell>
                </Grid>
            </Layout>
        </div>
    );
}