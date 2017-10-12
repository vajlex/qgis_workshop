---
title: Toolbars
layout: blank-two.html
date: 2017-09-20 16:00
collection: nav
---



## Add Data, Pan, Zoom, Identify


We must first add a layer of data to use the map navigation controls in QGIS. Go to this [download folder](http://maps.cga.harvard.edu/qgis/data/), then right-click and save the file workshop\_data\_*.zip to your desktop. Right-click on the .zip file to "Extract all files" (on Windows) to your desktop. Or on Mac, move the unzipped folder to your desktop. You should now have a "qgis_workshop" folder on your desktop. 

<div id="text_warn">
Some other useful datasets to start with are the global coverages provided by [Natural Earth](http://www.naturalearthdata.com/) and data for specific countries provided by [GADM](http://www.gadm.org/country).  You can download Shapefiles from these providers to use in QGIS.
</div>

```
In QGIS click the ADD VECTOR LAYER button.  
```

<div class="maps"><img src="../../assets/graf/add_vector.jpg"></div>

```
Notice that the Source Type will default to SYSTEM encoding. QGIS is VERY good at handling various character set encodings (such as multi-byte Chinese & Japanese, or UTF-8)! Simply declare the correct codepage at the time of opening the layer, and QGIS will handle the rest! For our example, set encoding = UTF-8.
```

<div class="maps"><img src="../../assets/graf/add_vec_encoding.jpg"></div>

```
In the Source section, click Browse and navigate to your Desktop\qgis_workshop\mod_1 folder.  You will see a list of files, many with the same names, but different extensions.  
```

<div class="maps"><img src="../../assets/graf/file_types.jpg">
</div>

```
At the bottom right, reset the All Files type to "Esri Shapefiles"
```
<div class="maps"><img src="../../assets/graf/file_types_shp.jpg">
</div>

```
Now the files for selection will be limited to the Shapefiles (ie, files with the .shp extension only).  Select the file containing Natural Earth countries called "ne_10m_admin_0_countries.shp"   Note on the filename:  this nomenclature is shorthand for Natural Earth, 1:10million scale, administrative unit boundaries, at the top level for the countries of the world.
```
<div class="maps"><img src="../../assets/graf/file_types_shp_only.jpg">
</div>

```
Once the .shp file appears in the Dataset form, you can click OPEN to add the vector layer to your QGIS project.
```

<div class="maps"><img src="../../assets/graf/add_vec_open.jpg">
</div>

```
By default when you add a vector layer to a blank project, the Map View will default to the Projection (CRS Coordinate Reference System) of the data being added, and it will zoom to the full spatial extent of the layer.
In this case, the countries of the world, shown in a rectangular grid, which is perhaps the most common CRS, called WGS84.
```

<div class="maps"><img src="../../assets/graf/add_vec_extent.jpg">
</div>

```
Now we will add another vector layer with the BROWSER PANEL.  In the Browser Panel navigate through the filesystem to find your Desktop and the qgis_workshop\mod_1 folder.  Then simply drag and drop a .shp file onto the Map View panel.  We will drag the file called "completed_route_to_poka.shp"
```

<div class="maps"><img src="../../assets/graf/add_vec_drag.jpg">
</div>

```
You will see that the layer has been added because it appears in the Layers Panel.  Note that the Map View remains at the same extent, when additional layers are added to the Project.  In order to zoom to the new layer, RIGHT-CLICK on that layer in the layer list, and select the option Zoom to Layer.
```

<div class="maps"><img src="../../assets/graf/add_vec_poka.jpg">
</div>

```
Now the Map View extent will be zoomed in to the extent of the "poka" layer.   Note that QGIS randomly picks a style and color to display for each layer being added.  In this case, we should change the style to make the "poka" route more visible.   Styles are found by RIGHT-CLICKING on the layer and selecting PROPERTIES.
```
<div class="maps"><img src="../../assets/graf/add_vec_zoom.jpg">
</div>

```
In the Layer Properties view, go to the STYLE tab, then click on the SIMPLE LINE properties under the Line Feature.   Now you can set the COLOR of the Simple Line style to RED, using the drop down at the right, and set the PEN WIDTH up, by clicking the INCREASE toggle to the right of the form.  The line symbol a the top right should update according to your selections.  Click the APPLY button, which will reset your Map View to your selections. 
```
<div class="maps"><img src="../../assets/graf/add_vec_style.jpg">
</div>

```
Note:  use the APPLY button when you are tweaking the settings, so that you don't have to re-open the Layer Properties again.  By hitting APPLY button the Map View is affected, but the Simple Line settings will remain open.   When you are satisfied with the settings, click OK to exit the settings and to close the Layer Properties view.
```

<div class="maps"><img src="../../assets/graf/add_vec_style_ok.jpg">
</div>

**Proceed to the [section on ADD DATA, PAN, ZOOM, IDENTIFY](../panzoom) Instructions**