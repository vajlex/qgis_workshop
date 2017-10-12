---
title: Toolbars
layout: blank-two.html
date: 2017-09-20 16:00
collection: nav
---



## Select Features

<div id="text_warn">
This tutorial page refers to data that you can download from the [older_data folder](http://maps.cga.harvard.edu/qgis/data/older_data/), right-click and save the file workshop\_data\_2014-02.zip to your desktop. Right-click on the .zip file to "Extract all files" (on Windows) to your desktop. Or on Mac, move the unzipped folder to your desktop. You should now have a "workshop_data_2014-02" folder on your desktop. 
</div>

```
We start by clicking the ADD VECTOR LAYER in the Manage Layers toolbar. Browse to workshop_data_2014-02/part_one folder to add egypt_adm0_iso-8859-1.shp, then set the ENCODING to ISO-8859-1.  
```

<div class="maps"><img src="../../assets/graf/add_adm0.jpg"></div>

```
Add a second layer using the same method, this time add the egypt_adm1_iso-8859-1.shp  Notice the only difference in the filenames is "adm0" and "adm1" indicating that they are the 0 level (or country level) and 1 level (or first admin divisions level) for Egypt.

Now that we have two layers open, let's see all the attributes for the features in one vector layer by right-clicking on the "adm1" LAYER in the LAYER LIST, then select OPEN ATTRIBUTE TABLE from the drop-down choices.  Browse the Attribute Table and notice the top row contains FIELD names, and each row contains the values for those field types for a particular features. One ROW in the attribute table holds the data related to  one spatial feature that can be seen in the Map View.
```

<div class="maps"><img src="../../assets/graf/attribute_table.jpg"></div>

```
Select a single feature by clicking on the ROW NUMBER at the left side of the Attribute Table. The SELECTED ROW will be highlighted. Move your cursor over the SELECTION OPTIONS along the top of the Attribute Table. Tooltips will appear indicating various options, such as TOGGLE EDITS, SAVE EDITS, etc. Click on ZOOM TO SELECTION, and the MAP VIEW extent will zoom in to show the selected item (or multiple selected items).  
```

<div class="maps"><img src="../../assets/graf/selection_options.jpg">
<br>
<img src="../../assets/graf/selection_zoom.jpg">

</div>

```
Convenient selection options for working with attributes are: UNSELECT ALL, MOVE SELECTED ROWS TO TOP, INVERT SELECTION, SELECT BY EXPRESSION, highlighted below.
```
<div class="maps"><img src="../../assets/graf/select_tools.jpg">
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

<div class="maps"><img src="../../assets/graf/add_vec_poka_extent.jpg">
</div>

```
Now the Map View extent will be zoomed in to the extent of the "poka" layer.   
```
<div class="maps"><img src="../../assets/graf/add_vec_zoom.jpg">
</div>

```
If it is not already active, make sure the MAP NAVIGATION TOOLBAR is active, then click on the PAN tool. Move the hand-shaped cursor over the MAP view, then click and drag to PAN the map. Letting go of the click button will set the MAP view the new position.
```
<div class="maps"><img src="../../assets/graf/pan_hand.jpg">
</div>

```
Now click the ZOOM tool. With the ZOOM tool active, both click and drag a box shape over an area of the map. Letting go of the click button will zoom into the extent of the selection.
```

<div class="maps"><img src="../../assets/graf/zoom_icon.jpg">
</div>

```
Now make the ZOOM OUT tool active. Click any spot on the map view and the view will zoom out, centered on the selected point.
```

<div class="maps"><img src="../../assets/graf/zoom_out.jpg">
</div>

```
To use the IDENTIFY tool, first right-click on the TOOLBAR AREA and make sure the ATTRIBUTES toolbar is active.  IMPORTANT NOTE:  You must make the layer ACTIVE for which you want to identify a feature!  So first click on the Natural Earth layer (ne_10m_admin_0_countries) in the Layers Panel
Now you will can make the IDENTIFY tool active (a white letter "i" in a small blue circle) by clicking on that tool in the ATTRIBUTES Toolbar.
Once the IDENTIFY tool is engaged, move your cursor to a spot on the MAP VIEW that has NOT got any features (a blank spot) and click on it. You will see a message in the lower left part of the STATUS BAR, "no features at this position found."  In addition, the IDENTIFY RESULTS panel will open on the right side of your MAP VIEW. 
```

<div class="maps"><img src="../../assets/graf/identify_empty.jpg">
</div>

```
Now try clicking on a area of the MAP VIEW that DOES have features in the ACTIVE layer. You should see a small pop-up window containing attribute information for the feature that was clicked on.
```

<div class="maps"><img src="../../assets/graf/identify_hit.jpg">
</div>

```
Note that you might have to SCROLL to the right of the IDENTIFY RESULTS panel to see the attributes of the feature, in addition to the field names.
```
<div class="maps"><img src="../../assets/graf/identify_scroll.jpg">
</div>

```
Or you can POPUP the IDENTIFY RESULTS into a separate window to resize it and view both the field names and attributes, using the little POPUP toggle on the upper right.
```
<div class="maps"><img src="../../assets/graf/identify_float.jpg">
</div>

```
In the example shown, Turkey was IDENTIFIED.  To deselect the results, you can click the CLEAR RESULTS button at the top of the IDENTIFY RESULTS panel, or you can CLICK on an area where the ACTIVE LAYER has no features in the Map View.
```

**Proceed to the [SELECTION](../select) tutorial**