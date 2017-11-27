---
title: Edit Vector Polygons
layout: blank-two.html
date: 2017-09-20 18:00
collection: edit
---


## Edit Vector Points Layer

<p>

<div class="text_anchor"><strong>Turn on Digitizing Toolbar</strong><a id="prep_pts"></a></div>
<div class="gray-text">
 <ol>
  <li>Right-click on empty part of Toolbar Area</li>
  <li>Mouse down to CLICK on the Digitizing Toolbar</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_1.jpg"></div>

<div class="gray-text">
The Digitizing Tools will be GRAYED OUT until a layer is selected and is Editable
</div>

<div class="maps"><img 
src="../../assets/graf/edit_2.jpg"></div>

<div id="text_warn">
  You can use any point layer and polygon layer for this exercise.
</div>

<div class="gray-text">
 <ol>
  <li>First click on a POINTS layer in the Layers Panel to make it ACTIVE</li>
  <li>Then right click on the Layer and scroll down to TOGGLE EDITING</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_3.jpg"></div>


<div class="gray-text">
 <ol>
  <li>Now the Tools will be Clickable on the Digitizing Toolbar</li>
  <li>The Layer in the Layers Panel will have an EDITABLE icon</li>
  <li>Each Editable VERTEX will have a small RED X over it, indicating that it is possible to edit</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_4.jpg"></div>


<div class="gray-text">
 <ol>
  <li>To begin editing POINTS, click on the EDIT NODE TOOL within the Digitizing Toolbar</li>
  <li>Move the cursor over the POINT that you wish to edit and click on it</li>
  <li>The point and "editable" RED X will turn into a RED SQUARE, which means the specific vertex, or node, is now engaged to be edited, or moved to a new position</li>
  <li>Also note, a VERTEX EDITOR panel will appear when you have selected a vertex to EDIT, with the current x, y value of the vertex in the current Projection</li>
    </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_5.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Click and HOLD on the POINT</li>
  <li>The POINT will turn BLUE when it is engaged to be dragged to a new location</li>
  <li>The Vertex Editor Panel will highlight the currently engaged Vertex</li>
    </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_6.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Drag the point to the desired location and release the CLICK of the mouse</li>
  <li>The POINT will relocate to the new location</li>
  <li>The POINT will still be BLUE (as a temporary edit) until you click on another vertex to be edited
  <li>Note that the X, Y coordinates in the Vertex Editor Panel will now be UPDATED to those of the new location</li>
    </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_7.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Before continuing, you can ROLL BACK this edit by pressing both ctl-Z (both the CONTROL and the Z keys at the same time)</li>
  <li>If you click ctl-Z, the POINT will revert back to its original position, and the X, Y values in the Vertex Editor will also be rolled back</li>
  <li>Note that by using ctl-Z, the POINT will no longer be BLUE, but will roll back to the state of the RED X, meaning that the point is selectable and can be edited, but is not clicked on and engaged for moving, nor has it been moved to a new location
    </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_7.jpg"></div>

<div class="gray-text">
 <ol>
  <li>You can END the editing session at any time by CLICKING on the EDIT TOOL (the single Pencil icon)</li>
  <li>If you have made any changes, you will be prompted as to whether these should be SAVED or DISCARDED</li>
  <li>Clicking DISCARD will end the EDIT session and leave the active layer unchanged
  </li>
 </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/edit_8.jpg"></div>

<div id="text_warn">
  If you are sure that the new edits are correct, click SAVE, which will OVERWRITE the layer with the newly edited version.   You will NOT be able to roll back, after SAVING the edits!
  <p>One method to control your editing process, is to SAVE A NEW version of the layer that will be edited, with a serial number or Timestamp in the filename.   By creating new files for each editing session, you can revert to previous versions in case of some emergency need to roll back.
</div>

[![Editing Vectors Tutorial for QGIS 1.7](../../assets/graf/YouTube_icon_sm.jpg)](http://www.youtube.com/watch?v=vvuvmCOnpoM "Editing Vectors Tutorial QGIS 1.7")

<div class="plain-text">
**Proceed to [Vector Polygon](../vector_polygon) Editing Instructions**</div>