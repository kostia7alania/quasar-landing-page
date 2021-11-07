<template>
  <!-- <div id="map-wrap" style="height: 100vh">
    <no-ssr>
      <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
      </l-map>
    </no-ssr>
  </div> -->
  <div ref="mapTop" style="width: 100%" tabindex="0">
    <div
      style="width: 100%; height: 100%"
      class="tw-transition tw-duration-500 tw-ease-out-in"
      :class="{ 'tw-filter tw-grayscale tw-pointer-events-none': !isActive }"
    >
      <client-only>
        <l-map
          ref="map"
          :zoom="zoom"
          :center="center"
          @update:zoom="zoomUpdated"
          @ready="ready"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <!-- <l-marker name="poi-list-item" :lat-lng="latLon"></l-marker>
        <l-marker :lat-lng="[center[0], center[1]]">
          <l-popup class="leaflet-popup-component">
            <div>{{ latLon[0] }}</div>
          </l-popup>
        </l-marker> -->
          <l-marker
            ref="mapMarker"
            :key="'current-accommodation'"
            name="accos-list-item"
            :lat-lng="[center[0], center[1]]"
          >
            <l-popup
              ref="popup"
              :lat-lng="[center[0], center[1]]"
              class="leaflet-popup-component"
            >
              <Contacts
                :is-hide-title="isHideTitle"
                class="tw-py-4 tw-text-left tw-px-6"
              />
            </l-popup>
          </l-marker>
          <!-- <l-marker :lat-lng="[51, 6]" :icon="currentAccoIcon"></l-marker> -->
          <!-- <l-marker :lat-lng="[52, 7]" :icon="currentAccoIcon"></l-marker>
        <l-marker :lat-lng="[53, 8]" :icon="currentAccoIcon"></l-marker>
        <l-marker :lat-lng="[54, 9]" :icon="currentAccoIcon"></l-marker> -->
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  onMounted,
  onUnmounted,
} from '@nuxtjs/composition-api'
import Contacts from '@/components/Contacts.vue'

const lon = 55.37831427551369
const lat = 25.119574536556936

const randArray = () => [
  {
    id: Math.floor(Math.random() * 5000),
    gpsLat: lat,
    gpsLon: lon,
  },
]

let tm: ReturnType<typeof setTimeout>

export default defineComponent({
  name: 'MapTop',
  components: {
    Contacts,
  },
  props: {
    isActivePopup: { type: Boolean, default: false },
    isHideTitle: { type: Boolean, default: false },
  },
  setup(/* _, { refs } */) {
    const isActive: Ref<boolean> = ref(false)
    const mapTop: Ref<any> = ref(null)

    // type openPopup = () => void

    interface IMarker {
      mapObject: {
        openPopup: () => void
        closePopup: () => void
      }
    }
    const mapMarker: Ref<IMarker | null> = ref(null)

    const focusHandler = () => {
      isActive.value = true
      clearTimeout(tm)
    }
    const blurHandler = () => {
      isActive.value = false
      tm = setTimeout(() => {
        mapMarker?.value?.mapObject?.closePopup()
      }, 3000)
    }

    onMounted(() => {
      mapTop.value.addEventListener('focus', focusHandler, true)
      mapTop.value.addEventListener('blur', blurHandler, true)
    })

    onUnmounted(() => {
      mapTop.value.removeEventListener('focus', focusHandler, true)
      mapTop.value.removeEventListener('blur', blurHandler, true)
    })

    return { mapMarker, mapTop, isActive }
  },
  data() {
    return {
      zoom: 15,
      latLon: randArray(),
      center: [lat, lon],
      // => DEMO with dynamic adding places to the Leaflet map:
      // https://codesandbox.io/s/qlznv9o5wj?file=/src/components/LeafletMap.vue

      // defaultMarkerIcon: L.icon({
      //   iconUrl: 'e.jpg',
      //   iconSize: [150, 100],
      // }),
      // currentAccoIcon: L.icon({
      //   iconUrl: 'g.jpg',
      //   iconSize: [55, 25],
      // }),
      markerData: [],
      markerDataAccos: [],
      markers: [],
    }
  },
  methods: {
    setFit() {
      // const bounds = L
      // .latLngBounds
      // L.featureGroup(this.getSearchedItemMarkers()).getBounds()
      // ()
      // console.log('bounds', bounds)
      // this.map.fitBounds(bounds, { maxZoom: 13 })
    },
    zoomUpdated(zoom: number) {
      this.zoom = zoom
      // console.log({ zoom })
    },
    centerUpdated(center: [number, number]) {
      this.center = center
    },
    ready() {
      if (this.isActivePopup) this.mapMarker?.mapObject?.openPopup()

      /*
     this.map = this.$refs.map.leafletObject
      L.control.scale().addTo(this.map)
      L.control.zoom({ position: 'topright' }).addTo(this.map)
      this.map.scrollWheelZoom.disable()
      this.map.zoomControl.remove()
      this.map.on('popupclose', () => {
        this.defaultMarkerIcon = L.icon({
          iconUrl: 'e.jpg',
          iconSize: [151, 158],
        })
        this.currentAccoIcon = L.icon({
          iconUrl: 'g.jpg',
          iconSize: [100, 158],
        })
      })
      this.setFit()
      */
      // this.map.on('dragend', () => {
      //   this.boundsUpdated(this.map.getBounds(), this.zoom - 3);
      // });
      // this.map.on('zoomend', () => {
      //   this.boundsUpdated(this.map.getBounds(), this.zoom - 3);
      // });
    },
    // getSearchedItemMarkers() {
    //   let markerArray = []
    //   markerArray = [
    // L.marker([lat, lon], { icon: this.icon }),
    //   // L.marker([52, 7], { icon: this.icon }),
    //   // L.marker([53, 8], { icon: this.icon }),
    //   // L.marker([54, 9], { icon: this.icon }),
    // ]
    // return markerArray
    // },
    // boundsUpdated(bounds, zoom = this.zoom) {
    //   this.getPois(bounds, zoom);
    //   this.getAccommodations(bounds);
    // },
    // getAccommodations(/* bounds */) {
    //   console.log('get accos')
    //   setTimeout(() => {
    // this.markerDataAccos = randArray()
    //   }, 1000)
    // },
    // getPois(/* bounds, zoom = this.zoom */) {
    //   console.log('getpois')
    //   setTimeout(() => {
    // this.markerData = randArray()
    // }, 1000)
    // },
  },
})
</script>

<style lang="scss" scoped>
::v-deep {
  .leaflet-popup-content {
    margin: 0px;
  }
  .leaflet-container a.leaflet-popup-close-button {
    font-size: 2em;
    top: 14px;
    right: 14px;
    padding: 0;
  }
}
</style>
