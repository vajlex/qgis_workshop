---
title: Edit Vector Polygons
layout: blank-two.html
date: 2017-09-20 18:00
collection: edit
---


## Edit Vector Polygon Layer

<p>

<div class="plain-text">
 <ul>
  <li>[Basic Boundary Editing](#basic)</li>
  <li>[Move Feature](#move)</li>
 </ul>
</div>

<div class="text_anchor"><strong>Make a Layer Editable</strong><a id="basic"></a></div>

<div class="gray-text">
<ol>
 <li>Editing Polygons or Lines is similar to editing Point features, except that there will always be "segments" or "arcs" connecting the vertexes involved.
 </li>
 <li>Go to any POLYGON layer that you want to practice editing.   Right-click on the Layer in the Layers Panel and select TOGGLE EDITING.</li>
 <li>Now the features in your layer will be EDITABLE and each vertex that comprises the edges of the polygon features will be overlayed with the RED X</li>
</ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_poly_1.jpg"></div>

<div class="gray-text">
<ol>
 <li>Now engage the EDIT NODE TOOL
 </li>
 <li>Go to any vertex A, click and hold the mouse, then drag it to a new position B, then let go of the mouse click</li>
 <li>Now the Vertex will have moved, and the POLYGON that it is part of will be re-shaped.  </li>
</ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_poly_2.jpg"></div>

<div id="text_warn">
Note that by editing one polygon's edge, you have created a GAP, or an OVERLAP, when compared to the boundary of the ADJACENT POLYGON!   This "gap" or "sliver" will cause topological errors.  
<br>To prevent these gaps, you would have to adjust the adjacent boundary to edge-match  each updated vertex position.
<br>Typically this is accomplished by FIRST editing one polygon with the corrected boundary edge.  Then, after saving those edits, begin editing the ADJACENT polygons, one at a time, and using the TRACE tool to align the other polygon edges with the SHARED BOUNDARY.
<br>TIP:  it is sometimes useful to delete vertices of a polygon, along the new edge to be created, before using the trace tool.
<br>These editing functions take considerable practice to learn, just keep in mind that you can STEP BACKWARD when editing using the CTL-Z option, and you can DISCARD changeds when turning off the TOGGLE EDITING function, if needed.
</div>


<div class="text_anchor"><strong>Move a Polygon Feature</strong><a id="move"></a></div>

<div class="gray-text">
Occasionally it might be useful to move an entire feature to a new position (rather than adjusting one vertex at a time).

 <ol>
  <li>First engage the MOVE FEATURE(S) tool</li>
  <li>Click on the polygon feature that you want to move, and drag it to a new position, then release the mouse</li>
  <li>The entire polygon will be "nudged" to the new position, without having touched the relative positions of any vertices that make up the boundary.</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_poly_3.jpg"></div>

<div id="text_warn">
Keep in mind that MOVING FEATURES introduces the same shared boundary problems as editing vertices.
</div>


<div class="plain-text">
See also:  [TOPOLOGY](https://docs.qgis.org/2.2/en/docs/gentle_gis_introduction/topology.html) in QGIS Documentation.</div>