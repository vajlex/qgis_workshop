---
title: Add WMS Layer
layout: blank-two.html
date: 2017-09-20 18:00
collection: import
---



## Add WMS Layer (Web Map Service)
<br><br>
Web Map Services ([WMS](http://en.wikipedia.org/wiki/Web_Map_Service)) are publicly available geospatial datasets that comply to an open protocol, allowing many different types of applications to consume them. 
<br><br>
Leaflet provides an [overview of working with WMS](http://leafletjs.com/examples/wms/wms.html) in QGIS and adding WMS layers to Leaflet  Webmaps. 
<br><br>
In QGIS, adding WMS and WMTS (time enabled WMS) data layers can be done by clicking on a single Add Data button!  The problem is *finding* an active WMS Service to begin with.
<br><br>
USGS maintains a list of known WMS services for the United States [National Map Service Endpoints](https://viewer.nationalmap.gov/services/ "")
<br>
For a global list of WMS services, you can find some working WMS endpoints in the index of [HHypermap](http://hh.worldmap.harvard.edu/registry/ "").<br><br>   In the tutorial below we will show:
<br>
1. QGIS WMS server search
2. Connecting to WMS service
3. Adding WMS layer to QGIS Project

```
Before we add WMS, go to the Project Properties | CRS tab and set the projection to EPSG 3857.  You can find this by ticking the "enable on the fly CRS transformation" box at the upper left of CRS settings.  Then search for 3857 in the Filter box.  Hit OK.
```

<div class="maps"><img 
src="../../assets/graf/set_crs_3857.jpg"></div>

```
Now go to the Manage Layers Toolbar, and click on the ADD WMS / WMTS button.   In the Add Layers from WM(T)S dialog:
1. go to the SERVER SEARCH tab
2. type in a search term, such as "egypt" then click SEARCH
3. assuming you have some results below, click on a service, for example "Aggregated Multipurpose Landocover"
4. then ADD SELECTED ROW TO WMS LIST.
```

<div class="maps"><img 
src="../../assets/graf/wms_server_search.jpg"></div>

```
Now you should be back on the LAYERS tab, with the Service added to the list of available layers in the drop-down list.
1. Choose the "Aggregated Multipurpose Landcover" layer then click CONNECT
2. MOST OF THE TIME, the WMS service will fail to connect, or fail to find the WMS service
```

<div class="maps"><img 
src="../../assets/graf/fail_connect_wms.jpg"></div>

```
Failing to connect with the SERVER SEARCH, we can use Google to look for other options.  For example, I found a link to World Soil Information:
```
http://www.isric.org/

```
With a little digging, I found a Global Soils PH Levels WMS
```

https://goo.gl/f6wSzs

```
On this page, you can find a link, with this description:
This dataset is published in the view service (WMS) available at http://data.isric.org/geoserver/sg250m/wms? with layer name PHIHOX_M_sl1_250m.
What we want is that GET CAPABILITIES URL (including the Question Mark ? at the end of the string):
```
**http://data.isric.org/geoserver/sg250m/wms?**

```
Now we can try to add the WMS URL to our QGIS project:
1. Click ADD WM(T)S Layer button
2. In the LAYERS tab, click NEW
3. Type a NAME for the new Layer
4. Paste in the complete WMS URL
5. click OK to add to the list
```

<div class="maps"><img 
src="../../assets/graf/wms_server_new.jpg"></div>

```
Now the Layers list will have a new item for the service we just added.  
1. Select the new Service Name in the Drop-down list
2. click CONNECT
3. if the Service reponds, the list of available layers will be shown below.
4. click on one of the layers, the click the ADD button
```

<div class="maps"><img 
src="../../assets/graf/wms_server_connect_new.jpg"></div>

```
If the service connects successfully, the WMS layer will be added, with it's preset symbolization. 
```

<div class="maps"><img 
src="../../assets/graf/connect_wms_ok.jpg"></div>

```
We can adjust the layer order (putting the Egyptian geonames points on top) and zoom in quite close.  Clicking on a point of interest with the Identify Tool, we can see the soil PH for a particular area of interest, and we can see that this is indeed a global layer of data at a resolution of 250m pixels.  So WMS can be an amazing way to share raster data!
```

<div class="maps"><img 
src="../../assets/graf/wms_zoom.jpg"></div>

```
However, if we right-click on our WMS layer in the Layers Panel, then go to PROPERTIES - STYLE tab, we will find that the symbolization options are frozen.  We will have ONLY the Render Type option of Singleband color data, and we will not be able to reclassify or stretch the color ramp at all.   WMS is a READ-ONLY version of the data.
```

<div class="maps"><img 
src="../../assets/graf/wms_style.jpg"></div>

See also:
1. [Connect](http://www.northrivergeographic.com/qgiswms "") to WMS in National Map.
2. [WMS tutorial](http://www.qgistutorials.com/en/docs/working_with_wms.html "") from Ujaval Gandhi.

**Proceed to [Add KML Layer](../kml) Instructions**