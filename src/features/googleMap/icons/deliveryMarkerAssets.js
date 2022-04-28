const deliveryMarkerIcon = (map, color) => {
  const icon = {
    path: "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z",
    fillColor: color,
    fillOpacity: 1,
    strokeWeight: 1,
    strokeColor: "#211E1E",
    rotation: 1,
    scale: 1.3,
    className: "",
    anchor: new map.Point(15, 23),
    labelOrigin: new map.Point(12, 12),
  };
  return icon;
};

const deliveryMarkerLabel = (markerLabel, textColor) => {
  const label = {
    text: markerLabel,
    color: textColor,
    fontSize: "12px",
    fontWeight: "800",
  };

  return label;
};
export { deliveryMarkerIcon, deliveryMarkerLabel };
