---
title: Spatial Join
layout: blank-two.html
date: 2017-09-20 18:00
collection: join
---



## Join by Location (aka Spatial Join)

<p>

<div class="plain-text">
 <ul>
  <li>[Overview](#ovr)</li>
  <li>[Prepare Target Points Layer](#prep_pts)</li>
  <li>[Prepare Join Layer](#prep_join)</li>
  <li>[Reproject Join Layer](#reproject)</li>
  <li>[Join Operation](#join)</li>
  <li>[Check Join Results](#chk)</li>
  <li>[Save to Shapefile](#shp)</li>  
 </ul>
</div>

<div class="text_anchor"><strong>Overview</strong><a id="ovr"></a></div>

```
A common GIS task is to join the attributes from one spatial data layer to another. 

In this example we will join attributes from a polygon layer to a points layer, based on which polygon contains the points.
```

<div class="gray-text">
The following exercise uses data from:
<br>
1. [Workshop Data 2015-03 PART THREE](http://maps.cga.harvard.edu/qgis/data/older_data/workshop_data_2016-03.zip) Taiwan
</div>

<div class="text_anchor"><strong>Prepare Target Points Layer</strong><a id="prep_pts"></a></div>
<div class="gray-text">
 <ol>
  <li>For this exercise, we'll use a set of points showing power plant sites in Taiwan from the <a href="http://www.carma.org" target="_blank">CARMA database</a></li>
  <li>Add Vector Data, set UTF-8 encoding, and browse to <strong>part_three/Taiwan_CARMA_Xian80.shp</strong></li>
  <li>Right click on the Layer in the Layer List and the General tab, to check the Coordinate Reference System (projection) for this layer</li>
  <li>Note that it is in Projected CRS, EPSG:2333. Cancel the Properties Dialog window.</li>
  <li>Target Points layer should be ready for the join</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/spatial_join_0.jpg"></div>

<div class="text_anchor"><strong>Prepare Join Layer</strong><a id="prep_join"></a></div>
<div class="gray-text">
 <ol>
  <li>Add Vector Layer and browse to the <strong>part_three/tw_pop_xian80.shp</strong> layer, encoding = big5</li>
  <li>Click on the tw_pop_xian80 layer in the layer list and drag it below the Taiwan_CARMA layer. Now the points should be on top of the polygons in the Map View</li>
  <li>Right click on the tw_pop_xian80 Layer in the Layer List and the General tab, to check the Coordinate Reference System (projection) for this layer</li>
  <li>Note that tw_pop_xian80 is in the Projection: CRS EPSG 2333, Xian 1980 Zone 19</li>
  <li>This is the same projection as the target layer, so we can proceed with the Spatial Join</li>
  <li>If the Join layer was in a different projectiion we would need to reproject the join layer first, as illustrated in the following step</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/spatial_join_1.jpg"></div>

<div class="text_anchor"><strong>Reproject Join Layer</strong><a id="prep_join"></a></div>
<div class="gray-text">
 <ol>
  <li>Add Vector Layer and browse to the <strong>part_three/tw_pop_xian80.shp</strong> layer, encoding = big5</li>
  <li>Click on the tw_pop_xian80 layer in the layer list and drag it below the Taiwan_CARMA layer. Now the points should be on top of the polygons in the Map View</li>
  <li>Right click on the tw_pop_xian80 Layer in the Layer List and the General tab, to check the Coordinate Reference System (projection) for this layer</li>
  <li>Note that tw_pop_xian80 is in the Projection: CRS EPSG 2333, Xian 1980 Zone 19</li>
  <li>This is the same projection as the target layer, so we can proceed with the Spatial Join</li>
  <li>If the Join layer was in a different projectiion we would need to reproject the join layer first, as illustrated in the following step</li>
  </ol>
</div>

<div class="plain-text">
**Proceed to [Spaital Join](../join_spatial) Instructions**</div>