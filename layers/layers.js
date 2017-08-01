var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain background',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://stamen-tiles-{a-c}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})]
    })
})
]
});
var format_Deudavivaporhabitante0 = new ol.format.GeoJSON();
var features_Deudavivaporhabitante0 = format_Deudavivaporhabitante0.readFeatures(json_Deudavivaporhabitante0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deudavivaporhabitante0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Deudavivaporhabitante0.addFeatures(features_Deudavivaporhabitante0);var lyr_Deudavivaporhabitante0 = new ol.layer.Vector({
                source:jsonSource_Deudavivaporhabitante0, 
                style: style_Deudavivaporhabitante0,
                title: 'Deuda viva por habitante (€)<br />\
        <img src="styles/legend/Deudavivaporhabitante0_0.png" />  0 - 100 <br />\
        <img src="styles/legend/Deudavivaporhabitante0_1.png" />  100 - 300 <br />\
        <img src="styles/legend/Deudavivaporhabitante0_2.png" />  300 - 600 <br />\
        <img src="styles/legend/Deudavivaporhabitante0_3.png" />  600 - 1.200 <br />\
        <img src="styles/legend/Deudavivaporhabitante0_4.png" />  1.200 - 2.500 <br />\
        <img src="styles/legend/Deudavivaporhabitante0_5.png" /> >2.500<br />'
            });

lyr_Deudavivaporhabitante0.setVisible(true);
var layersList = [baseLayer,lyr_Deudavivaporhabitante0];
lyr_Deudavivaporhabitante0.set('fieldAliases', {'Codigo': 'Codigo', 'Texto': 'Texto', 'Cod_Prov': 'Cod_Prov', 'Provincia': 'Provincia', 'Cod_CCAA': 'Cod_CCAA', 'ComAutonom': 'ComAutonom', 'Codigo_1': 'Codigo_1', 'Codigo_Pro': 'Codigo_Pro', 'Codigo_Mun': 'Codigo_Mun', 'Municipio': 'Municipio', 'Habitantes': 'Habitantes', 'Deuda_': 'Deuda_', 'Deuda viva por habitante (€)': 'Deuda viva por habitante (€)', });
lyr_Deudavivaporhabitante0.set('fieldImages', {'Codigo': 'Hidden', 'Texto': 'Hidden', 'Cod_Prov': 'Hidden', 'Provincia': 'Hidden', 'Cod_CCAA': 'Hidden', 'ComAutonom': 'Hidden', 'Codigo_1': 'Hidden', 'Codigo_Pro': 'Hidden', 'Codigo_Mun': 'Hidden', 'Municipio': 'TextEdit', 'Habitantes': 'TextEdit', 'Deuda_': 'Hidden', 'Deuda viva por habitante (€)': 'TextEdit', });
lyr_Deudavivaporhabitante0.set('fieldLabels', {'Municipio': 'header label', 'Habitantes': 'header label', 'Deuda viva por habitante (€)': 'header label', });
lyr_Deudavivaporhabitante0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});