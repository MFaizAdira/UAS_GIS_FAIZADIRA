ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11185857.754484, -105572.682989, 11186688.659374, -104938.829338]);
var wms_layers = [];

var format_tanah_0 = new ol.format.GeoJSON();
var features_tanah_0 = format_tanah_0.readFeatures(json_tanah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tanah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tanah_0.addFeatures(features_tanah_0);
var lyr_tanah_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tanah_0, 
                style: style_tanah_0,
                popuplayertitle: 'tanah',
                interactive: true,
                title: '<img src="styles/legend/tanah_0.png" /> tanah'
            });
var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_1.addFeatures(features_jalan_1);
var lyr_jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });
var format_rumah_2 = new ol.format.GeoJSON();
var features_rumah_2 = format_rumah_2.readFeatures(json_rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_2.addFeatures(features_rumah_2);
var lyr_rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_2, 
                style: style_rumah_2,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_2.png" /> rumah'
            });
var format_fasilitas_3 = new ol.format.GeoJSON();
var features_fasilitas_3 = format_fasilitas_3.readFeatures(json_fasilitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_3.addFeatures(features_fasilitas_3);
var lyr_fasilitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_3, 
                style: style_fasilitas_3,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_3.png" /> fasilitas'
            });

lyr_tanah_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_rumah_2.setVisible(true);lyr_fasilitas_3.setVisible(true);
var layersList = [lyr_tanah_0,lyr_jalan_1,lyr_rumah_2,lyr_fasilitas_3];
lyr_tanah_0.set('fieldAliases', {'id': 'id', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', });
lyr_rumah_2.set('fieldAliases', {'id': 'id', 'luas': 'luas', 'kode rumah': 'kode rumah', 'tipe': 'tipe', 'status': 'status', });
lyr_fasilitas_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'Luas_1': 'Luas_1', });
lyr_tanah_0.set('fieldImages', {'id': '', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_rumah_2.set('fieldImages', {'id': 'TextEdit', 'luas': 'Range', 'kode rumah': 'TextEdit', 'tipe': '', 'status': '', });
lyr_fasilitas_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', 'Luas_1': '', });
lyr_tanah_0.set('fieldLabels', {'id': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', });
lyr_rumah_2.set('fieldLabels', {'id': 'hidden field', 'luas': 'hidden field', 'kode rumah': 'inline label - always visible', 'tipe': 'inline label - always visible', 'status': 'no label', });
lyr_fasilitas_3.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'luas': 'no label', 'Luas_1': 'no label', });
lyr_fasilitas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});