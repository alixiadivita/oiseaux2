var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Marche_matinale7tracks_1 = new ol.format.GeoJSON();
var features_Marche_matinale7tracks_1 = format_Marche_matinale7tracks_1.readFeatures(json_Marche_matinale7tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_matinale7tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_matinale7tracks_1.addFeatures(features_Marche_matinale7tracks_1);
var lyr_Marche_matinale7tracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_matinale7tracks_1, 
                style: style_Marche_matinale7tracks_1,
                interactive: true,
                title: '<img src="styles/legend/Marche_matinale7tracks_1.png" /> Marche_matinale(7), tracks'
            });
var format_parcours_oiseaux_2 = new ol.format.GeoJSON();
var features_parcours_oiseaux_2 = format_parcours_oiseaux_2.readFeatures(json_parcours_oiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours_oiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours_oiseaux_2.addFeatures(features_parcours_oiseaux_2);
var lyr_parcours_oiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours_oiseaux_2, 
                style: style_parcours_oiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/parcours_oiseaux_2.png" /> parcours_oiseaux'
            });
var format_oiseaudivitadimaio_3 = new ol.format.GeoJSON();
var features_oiseaudivitadimaio_3 = format_oiseaudivitadimaio_3.readFeatures(json_oiseaudivitadimaio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oiseaudivitadimaio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oiseaudivitadimaio_3.addFeatures(features_oiseaudivitadimaio_3);
var lyr_oiseaudivitadimaio_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oiseaudivitadimaio_3, 
                style: style_oiseaudivitadimaio_3,
                interactive: true,
                title: '<img src="styles/legend/oiseaudivitadimaio_3.png" /> oiseau-di vita di maio'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_Marche_matinale7tracks_1.setVisible(true);lyr_parcours_oiseaux_2.setVisible(true);lyr_oiseaudivitadimaio_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_Marche_matinale7tracks_1,lyr_parcours_oiseaux_2,lyr_oiseaudivitadimaio_3];
lyr_Marche_matinale7tracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_parcours_oiseaux_2.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_oiseaudivitadimaio_3.set('fieldAliases', {'nom oiseau': 'nom oiseau', 'nombre': 'nombre', 'typcontact': 'typcontact', 'certitude': 'certitude', });
lyr_Marche_matinale7tracks_1.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_parcours_oiseaux_2.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_oiseaudivitadimaio_3.set('fieldImages', {'nom oiseau': 'TextEdit', 'nombre': 'TextEdit', 'typcontact': 'TextEdit', 'certitude': 'Range', });
lyr_Marche_matinale7tracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_parcours_oiseaux_2.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_oiseaudivitadimaio_3.set('fieldLabels', {'nom oiseau': 'no label', 'nombre': 'no label', 'typcontact': 'no label', 'certitude': 'no label', });
lyr_oiseaudivitadimaio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});