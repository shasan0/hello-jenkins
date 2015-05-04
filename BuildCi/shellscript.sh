#!/bin/bash
jshint --reporter=reporter.js . > jshint_report.xml
sitespeed.io -u https://vsoftiris.asia/iris/ --junit > speedtest_result.xml
casperjs test caspertest1.js --xunit=log1.xml
newman -c iris_admin.json.postman_collection
