import { Icon } from 'leaflet'

export default function gymMarker(gym, ts) {
  const iconSize = 30
  const iconAnchorY = iconSize * 0.849
  const popupAnchorY = (gym.raid_end_timestamp >= ts && gym.raid_level > 0)
    ? -55 : -2 - iconAnchorY

  const inBattle = gym.in_battle ? 'battle' : 'gym'
  return new Icon({
    iconUrl: `/images/${inBattle}/${gym.team_id || 0}_${(6 - gym.availble_slots) || 0}.png`,
    iconSize,
    iconAnchor: [iconSize / 2, iconAnchorY],
    popupAnchor: [0, popupAnchorY],
  })
}