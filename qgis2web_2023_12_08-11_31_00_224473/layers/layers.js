var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NCR_real_1 = new ol.format.GeoJSON();
var features_NCR_real_1 = format_NCR_real_1.readFeatures(json_NCR_real_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NCR_real_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NCR_real_1.addFeatures(features_NCR_real_1);
var lyr_NCR_real_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NCR_real_1, 
                style: style_NCR_real_1,
                interactive: true,
                title: '<img src="styles/legend/NCR_real_1.png" /> NCR_real'
            });
var format_school_final_engage_2 = new ol.format.GeoJSON();
var features_school_final_engage_2 = format_school_final_engage_2.readFeatures(json_school_final_engage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_final_engage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_final_engage_2.addFeatures(features_school_final_engage_2);
var lyr_school_final_engage_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_final_engage_2, 
                style: style_school_final_engage_2,
                interactive: true,
                title: '<img src="styles/legend/school_final_engage_2.png" /> school_final_engage'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NCR_real_1.setVisible(true);lyr_school_final_engage_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NCR_real_1,lyr_school_final_engage_2];
lyr_NCR_real_1.set('fieldAliases', {'City/Municipality': 'City/Municipality', });
lyr_school_final_engage_2.set('fieldAliases', {'School': 'School', 'Programs Offered': 'Programs Offered', 'Type': 'Type', 'Requires Entrance Exam': 'Requires Entrance Exam', });
lyr_NCR_real_1.set('fieldImages', {'City/Municipality': '', });
lyr_school_final_engage_2.set('fieldImages', {'School': 'TextEdit', 'Programs Offered': 'TextEdit', 'Type': 'TextEdit', 'Requires Entrance Exam': 'TextEdit', });
lyr_NCR_real_1.set('fieldLabels', {'City/Municipality': 'inline label', });
lyr_school_final_engage_2.set('fieldLabels', {'School': 'inline label', 'Programs Offered': 'inline label', 'Type': 'inline label', 'Requires Entrance Exam': 'inline label', });
lyr_school_final_engage_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});