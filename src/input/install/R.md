---
title: R Markdown Install
layout: blank-two.html
date: 2017-09-20 12:00
collection: install
---



## Install (R)QGIS

Complete instructions on installing R with QGIS (which includes installing SAGA), are found in this excellent how-to document by Jannes Muenchow, Patrick Schratz



[(R)QGIS installation guide for Windows, Mac & Linux](https://cran.r-project.org/web/packages/RQGIS/vignettes/install_guide.html)

If you have already done a stand-alone install of **QGIS on Windows** and want to add on SAGA for R to run, consider the following option:

	
1) Install SAGA from https://sourceforge.net/projects/saga-gis/

2) Extract the SAGA application, then move the entire folder (such as saga-5.0.0_x64) to a secure path, such as: C:\Program Files\

3) If you had QGIS running, quit the application, then launch QGIS again

4) In QGIS go to Processing > Options > Providers > SAGA and make sure that the setting for "SAGA folder" is set to the correct path (where you pasted the application folder).

5) If you get a warning that the system cannot find "msys" folder, you may have to tweak some settings for other applications, such as GRASS in the Processing > Options > Providers  as explained [here](https://gis.stackexchange.com/questions/191590/qgis-2-14-1-lastools-install-error-wrong-value-for-parameter-msys-folder)

Once you have the packages installed, you should be able to run R, from the Processing Toolbox.


**Custom R Script example**
Here is a nice explanation of how to write a custom script in R that takes inputs from shapefiles and .csv that have been added to the QGIS Map Canvas:  [QGIS and R sampling example](http://amsantac.co/blog/en/2015/10/31/qgis-r.html)


*Note*: the script works when you DRAG the input files onto the Map Canvas, but not when you ADD VECTOR DATA.  This has to do with forward slash / vs. backslash \ that gets picked up in the path to the source file.  [Explanation of this problem](https://gis.stackexchange.com/questions/228074/how-to-fix-or-avoid-backslash-in-filepath-to-vector-layer-qgis-on-windows).

_using R with QGIS video_

![YouTube](../../assets/graf/YouTube_icon_sm.jpg "YouTube")</p>

English:  [QGIS 2.18 with R 3.4.1 on Windows, Youtube Video, 12m58s](https://www.youtube.com/watch?v=1bdl0D8FPSI)
