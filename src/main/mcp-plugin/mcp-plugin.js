(function () {
  "use strict";

  // =========================================================================
  // Shape Library
  // =========================================================================

  var shapeLibrary = {
    rectangle: {
      category: "general",
      style: "rounded=0;whiteSpace=wrap;html=1;",
    },
    rounded_rectangle: {
      category: "general",
      style: "rounded=1;whiteSpace=wrap;html=1;",
    },
    text: {
      category: "general",
      style: "text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
    },
    ellipse: {
      category: "general",
      style: "ellipse;whiteSpace=wrap;html=1;",
    },
    square: {
      category: "general",
      style: "whiteSpace=wrap;html=1;aspect=fixed;",
    },
    circle: {
      category: "general",
      style: "ellipse;whiteSpace=wrap;html=1;aspect=fixed;",
    },
    process: {
      category: "general",
      style: "shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;",
    },
    diamond: {
      category: "general",
      style: "rhombus;whiteSpace=wrap;html=1;",
    },
    parallelogram: {
      category: "general",
      style: "shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;",
    },
    hexagon: {
      category: "general",
      style: "shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;",
    },
    triangle: {
      category: "general",
      style: "triangle;whiteSpace=wrap;html=1;",
    },
    cylinder3: {
      category: "general",
      style: "shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;",
    },
    cloud: {
      category: "general",
      style: "ellipse;shape=cloud;whiteSpace=wrap;html=1;",
    },
    document: {
      category: "general",
      style: "shape=document;whiteSpace=wrap;html=1;boundedLbl=1;",
    },
    internalStorage: {
      category: "general",
      style: "shape=internalStorage;whiteSpace=wrap;html=1;backgroundOutline=1;",
    },
    cube: {
      category: "general",
      style: "shape=cube;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;darkOpacity=0.05;darkOpacity2=0.1;",
    },
    step: {
      category: "general",
      style: "shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;",
    },
    trapezoid: {
      category: "general",
      style: "shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;html=1;fixedSize=1;",
    },
    tape: {
      category: "general",
      style: "shape=tape;whiteSpace=wrap;html=1;",
    },
    note: {
      category: "general",
      style: "shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;",
    },
    card: {
      category: "general",
      style: "shape=card;whiteSpace=wrap;html=1;",
    },
    callout: {
      category: "general",
      style: "shape=callout;whiteSpace=wrap;html=1;perimeter=calloutPerimeter;",
    },
    umlActor: {
      category: "general",
      style: "shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;",
    },
    xor: {
      category: "general",
      style: "shape=xor;whiteSpace=wrap;html=1;",
    },
    or: {
      category: "general",
      style: "shape=or;whiteSpace=wrap;html=1;",
    },
    dataStorage: {
      category: "general",
      style: "shape=dataStorage;whiteSpace=wrap;html=1;fixedSize=1;",
    },
    swimlane: {
      category: "general",
      title: "Container",
      style: "swimlane;startSize=0;",
    },
    verticalContainer: {
      category: "general",
      title: "Vertical Container",
      style: "swimlane;whiteSpace=wrap;html=1;",
    },
    horizontalContainer: {
      category: "general",
      title: "Horizontal Container",
      style: "swimlane;horizontal=0;whiteSpace=wrap;html=1;",
    },
    list: {
      category: "general",
      title: "List",
      style:
        "swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;",
    },
    listItem: {
      category: "general",
      title: "List Item",
      style:
        "text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;",
    },
    curve: {
      category: "general",
      style: "curved=1;endArrow=classic;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;",
    },
    flexArrow: {
      category: "general",
      title: "Bidirectional Arrow",
      style:
        "shape=flexArrow;endArrow=classic;startArrow=classic;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },
    arrow: {
      category: "general",
      title: "Arrow",
      style: "shape=flexArrow;endArrow=classic;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },
    dashedLine: {
      category: "general",
      style: "endArrow=none;dashed=1;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },
    dottedLine: {
      category: "general",
      style: "endArrow=none;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;rounded=0;fontSize=12;startSize=8;endSize=8;",
    },
    line: {
      category: "general",
      style: "endArrow=none;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },
    bidirectionalConnector: {
      category: "general",
      style: "endArrow=classic;startArrow=classic;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },
    directionalConnector: {
      category: "general",
      style: "endArrow=classic;html=1;rounded=0;fontSize=12;startSize=8;endSize=8;curved=1;",
    },

    // AWS / Analytics
    "mxgraph.aws4.athena": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.athena;",
    },
    "mxgraph.aws4.elasticsearch_service": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticsearch_service;",
    },
    "mxgraph.aws4.kinesis": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis;",
    },
    "mxgraph.aws4.kinesis_data_analytics": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_analytics;",
    },
    "mxgraph.aws4.kinesis_data_firehose": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_firehose;",
    },
    "mxgraph.aws4.kinesis_data_streams": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis_data_streams;",
    },
    "mxgraph.aws4.managed_service_for_apache_flink": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_service_for_apache_flink;",
    },
    "mxgraph.aws4.quicksight": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.quicksight;",
    },
    "mxgraph.aws4.managed_streaming_for_kafka": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_streaming_for_kafka;",
    },
    "mxgraph.aws4.glue": {
      category: "mxgraph.aws4.analytics",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glue;",
    },

    // AWS / Compute
    "mxgraph.aws4.compute": {
      category: "mxgraph.aws4.compute",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.compute;",
    },
    "mxgraph.aws4.ec2": {
      category: "mxgraph.aws4.compute",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2;",
    },
    "mxgraph.aws4.lambda": {
      category: "mxgraph.aws4.compute",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.lambda;",
    },

    // AWS / Containers
    "mxgraph.aws4.containers": {
      category: "mxgraph.aws4.containers",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.containers;",
    },
    "mxgraph.aws4.eks": {
      category: "mxgraph.aws4.containers",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eks;",
    },
    "mxgraph.aws4.ecr": {
      category: "mxgraph.aws4.containers",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecr;",
    },
    "mxgraph.aws4.ecs": {
      category: "mxgraph.aws4.containers",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecs;",
    },
    "mxgraph.aws4.fargate": {
      category: "mxgraph.aws4.containers",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.fargate;",
    },

    // AWS / Network & Content Delivery
    "mxgraph.aws4.api_gateway": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.api_gateway;",
    },
    "mxgraph.aws4.cloudfront": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudfront;",
    },
    "mxgraph.aws4.route_53": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.route_53;",
    },
    "mxgraph.aws4.vpc_privatelink": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.vpc_privatelink;",
    },
    "mxgraph.aws4.vpc": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.vpc;",
    },
    "mxgraph.aws4.elastic_load_balancing": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_load_balancing;",
    },
    "mxgraph.aws4.endpoint": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.endpoint;",
    },
    "mxgraph.aws4.customer_gateway": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.customer_gateway;",
    },
    "mxgraph.aws4.application_load_balancer": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application_load_balancer;",
    },
    "mxgraph.aws4.network_load_balancer": {
      category: "mxgraph.aws4.network",
      style:
        "sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.network_load_balancer;",
    },

    // AWS / Application Integration
    "mxgraph.aws4.sns": {
      category: "mxgraph.aws4.application_integration",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sns;",
    },
    "mxgraph.aws4.sqs": {
      category: "mxgraph.aws4.application_integration",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sqs;",
    },
    "mxgraph.aws4.eventbridge": {
      category: "mxgraph.aws4.application_integration",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eventbridge;",
    },
    "mxgraph.aws4.managed_workflows_for_apache_airflow": {
      category: "mxgraph.aws4.application_integration",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.managed_workflows_for_apache_airflow;",
    },

    // AWS / Database
    "mxgraph.aws4.database": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.database;",
    },
    "mxgraph.aws4.aurora": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.aurora;",
    },
    "mxgraph.aws4.documentdb_with_mongodb_compatibility": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.documentdb_with_mongodb_compatibility;",
    },
    "mxgraph.aws4.dynamodb": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.dynamodb;",
    },
    "mxgraph.aws4.elasticache": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticache;",
    },
    "mxgraph.aws4.neptune": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.neptune;",
    },
    "mxgraph.aws4.rds": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.rds;",
    },
    "mxgraph.aws4.redshift": {
      category: "mxgraph.aws4.database",
      style:
        "sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[0,1,0],[0.25,1,0],[0.5,1,0],[0.75,1,0],[1,1,0],[0,0.25,0],[0,0.5,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]];outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.redshift;",
    },

    "mxgraph.aws4.": {
      category: "mxgraph.aws4.database",
      style: "",
    },
  };

  // =========================================================================
  // Utility: remove circular dependencies for JSON serialization
  // =========================================================================

  function transform_NamedNodeMap_to_record(attributes) {
    var tstr = Object.prototype.toString.call(attributes);

    if (tstr !== "[object NamedNodeMap]") {
      return attributes;
    }

    if (attributes.length === undefined) {
      return attributes;
    }

    var transformed_attributes = {};

    for (var i = 0; i < attributes.length; i++) {
      var attr = attributes[i];

      if (attr && attr.name && attr.value !== undefined) {
        transformed_attributes[attr.name] = attr.value;
      }
    }

    return transformed_attributes;
  }

  function transform_cells_NamedNodeMap_to_attributes(cell) {
    if (cell.value.attributes && typeof cell.value.attributes === "object") {
      var attributes = cell.value.attributes;
      return transform_NamedNodeMap_to_record(attributes);
    }

    return {};
  }

  function remove_circular_dependencies(obj, visited, path) {
    if (!visited) {
      visited = new WeakSet();
    }

    if (!path) {
      path = [];
    }

    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      if (visited.has(obj)) {
        return "[Circular " + path.join(".") + "]";
      }

      visited.add(obj);

      return obj.map(function (item, index) {
        return remove_circular_dependencies(item, visited, path.concat(["[" + index + "]"]));
      });
    }

    var tstr = Object.prototype.toString.call(obj);

    if (tstr === "[object NamedNodeMap]") {
      return transform_NamedNodeMap_to_record(obj);
    }

    if (tstr !== "[object Object]" && tstr !== "[object Element]") {
      return obj;
    }

    if (visited.has(obj)) {
      return "[Circular " + path.join(".") + "]";
    }

    visited.add(obj);
    var result = {};

    for (var key in obj) {
      var value = obj[key];

      if (
        typeof value !== "function" &&
        key !== "children" &&
        key !== "edges" &&
        !key.startsWith("aria") &&
        key !== "ownerDocument" &&
        key !== "part" &&
        key !== "classList" &&
        key !== "childNodes" &&
        key !== "shadowRoot" &&
        key !== "innerHTML" &&
        key !== "outerHTML" &&
        key !== "scrollTop" &&
        key !== "scrollLeft" &&
        key !== "scrollWidth" &&
        key !== "scrollHeight" &&
        key !== "clientTop" &&
        key !== "clientLeft" &&
        key !== "clientWidth" &&
        key !== "clientHeight" &&
        key !== "onbeforecopy" &&
        key !== "onbeforecut" &&
        key !== "onbeforepaste" &&
        key !== "onsearch" &&
        key !== "elementTiming" &&
        key !== "onfullscreenchange" &&
        key !== "onfullscreenerror" &&
        key !== "onwebkitfullscreenchange" &&
        key !== "onwebkitfullscreenerror" &&
        key !== "firstElementChild" &&
        key !== "lastElementChild" &&
        key !== "childElementCount" &&
        key !== "previousElementSibling" &&
        key !== "nextElementSibling" &&
        key !== "currentCSSZoom" &&
        key !== "parentNode" &&
        key !== "parentElement" &&
        key !== "firstChild" &&
        key !== "lastChild" &&
        key !== "previousSibling" &&
        key !== "nextSibling" &&
        key !== "nodeValue" &&
        key !== "textContent"
      ) {
        var stripped_value = {};

        if ((key === "parent" || key === "source" || key === "target") && value !== undefined && value !== null) {
          stripped_value = {
            id: value.id,
          };
        } else {
          stripped_value = value;
        }

        result[key] = remove_circular_dependencies(stripped_value, visited, path.concat([key]));
      }
    }

    return result;
  }

  // =========================================================================
  // Tool handler functions
  // =========================================================================

  function add_new_rectangle(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;

    var x = options.x || 100;
    var y = options.y || 100;
    var width = options.width || 120;
    var height = options.height || 60;
    var text = options.text || "";
    var style = options.style || "whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;";

    // Ensure html=1 is always present for proper label rendering
    if (style.indexOf("html=") === -1) {
      style = style + "html=1;";
    }

    graph.getModel().beginUpdate();

    try {
      var vertex = graph.insertVertex(graph.getDefaultParent(), null, text, x, y, width, height, style);

      return vertex;
    } finally {
      graph.getModel().endUpdate();
    }
  }

  function delete_cell_by_id(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;

    var cell_id = options.cell_id;
    var cell = graph.getModel().getCell(cell_id);

    if (!cell) {
      return false;
    }

    graph.getModel().beginUpdate();

    try {
      graph.removeCells([cell]);
      return true;
    } finally {
      graph.getModel().endUpdate();
    }
  }

  function add_edge(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();

    var source = model.getCell(options.source_id);
    var target = model.getCell(options.target_id);

    if (!source || !target) {
      return null;
    }

    var defaultStyle = "endArrow=classic;html=1;rounded=0;";
    var style = options.style || defaultStyle;
    var text = options.text || "";

    model.beginUpdate();

    try {
      var edge = graph.insertEdge(graph.getDefaultParent(), null, text, source, target, style);

      return edge;
    } finally {
      model.endUpdate();
    }
  }

  function edit_cell(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();

    var cell_id = options.cell_id;

    if (!cell_id) {
      throw new Error("edit_cell requires a cell_id");
    }

    var cell = model.getCell(cell_id);

    if (!cell) {
      throw new Error("edit_cell could not find cell with id '" + cell_id + "'");
    }

    model.beginUpdate();

    try {
      var has_position_change = options.x !== undefined || options.y !== undefined;
      var has_size_change = options.width !== undefined || options.height !== undefined;

      if (has_position_change || has_size_change) {
        var geometry = cell.geometry ? cell.geometry.clone() : null;

        if (!geometry) {
          throw new Error("Cell '" + cell_id + "' does not support geometry updates (missing geometry)");
        }

        if (options.x !== undefined) geometry.x = options.x;
        if (options.y !== undefined) geometry.y = options.y;
        if (options.width !== undefined) geometry.width = options.width;
        if (options.height !== undefined) geometry.height = options.height;

        model.setGeometry(cell, geometry);
      }

      if (options.text !== undefined) {
        graph.cellLabelChanged(cell, options.text, false);
      }

      if (options.style !== undefined) {
        graph.setCellStyle(options.style, [cell]);
      }
    } finally {
      model.endUpdate();
    }

    return cell;
  }

  function edit_edge(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();

    var cell_id = options.cell_id;

    if (!cell_id) {
      throw new Error("edit_edge requires a cell_id");
    }

    var edge = model.getCell(cell_id);

    if (!edge) {
      throw new Error("edit_edge could not find edge with id '" + cell_id + "'");
    }

    if (!edge.edge) {
      throw new Error("Cell '" + cell_id + "' is not an edge");
    }

    model.beginUpdate();

    try {
      if (options.source_id !== undefined) {
        var newSource = model.getCell(options.source_id);

        if (!newSource) {
          throw new Error("edit_edge could not find source cell '" + options.source_id + "'");
        }

        model.setTerminal(edge, newSource, true);
      }

      if (options.target_id !== undefined) {
        var newTarget = model.getCell(options.target_id);

        if (!newTarget) {
          throw new Error("edit_edge could not find target cell '" + options.target_id + "'");
        }

        model.setTerminal(edge, newTarget, false);
      }

      if (options.text !== undefined) {
        graph.cellLabelChanged(edge, options.text, false);
      }

      if (options.style !== undefined) {
        graph.setCellStyle(options.style, [edge]);
      }
    } finally {
      model.endUpdate();
    }

    return edge;
  }

  function set_cell_shape(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();

    var cell_id = options.cell_id;
    var shape_name = options.shape_name;

    if (!cell_id) {
      throw new Error("set_cell_shape requires a cell_id");
    }

    if (!shape_name) {
      throw new Error("set_cell_shape requires a shape_name");
    }

    var cell = model.getCell(cell_id);

    if (!cell) {
      throw new Error("set_cell_shape could not find cell with id '" + cell_id + "'");
    }

    if (cell.edge) {
      throw new Error("Cell '" + cell_id + "' is an edge; set_cell_shape expects a vertex");
    }

    var shapeEntry = shapeLibrary[shape_name];
    var style = shapeEntry && shapeEntry.style;

    if (!style) {
      throw new Error("set_cell_shape could not find a shape named '" + shape_name + "'");
    }

    model.beginUpdate();

    try {
      graph.setCellStyle(style, [cell]);
    } finally {
      model.endUpdate();
    }

    return cell;
  }

  function set_cell_data(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var mxUtils = window.mxUtils;

    var cell_id = options.cell_id;
    var key = options.key;
    var value = options.value;

    if (!cell_id) {
      throw new Error("set_cell_data requires a cell_id");
    }

    if (!key) {
      throw new Error("set_cell_data requires a key");
    }

    if (value === undefined) {
      throw new Error("set_cell_data requires a value");
    }

    var cell = model.getCell(cell_id);

    if (!cell) {
      throw new Error("set_cell_data could not find cell with id '" + cell_id + "'");
    }

    model.beginUpdate();

    try {
      var d = graph.getModel().getValue(cell);

      if (!mxUtils.isNode(d)) {
        var h = mxUtils.createXmlDocument().createElement("object");
        h.setAttribute("label", d || "");
        d = h;
      }

      d = d.cloneNode(true);
      d.setAttribute(key, value);
      graph.getModel().setValue(cell, d);
    } catch (e) {
      console.error("[set-cell-data] error", e);
    } finally {
      model.endUpdate();
    }

    return cell;
  }

  function get_shape_categories(ui) {
    var categories = new Set();

    for (var key in shapeLibrary) {
      if (shapeLibrary.hasOwnProperty(key)) {
        categories.add(shapeLibrary[key].category || "General");
      }
    }

    return Array.from(categories);
  }

  function get_shapes_in_category(ui, options) {
    var results = [];

    for (var key in shapeLibrary) {
      if (shapeLibrary.hasOwnProperty(key)) {
        var shape = shapeLibrary[key];

        if (shape.category === options.category_id) {
          results.push({
            id: key,
            title: shape.title || key,
          });
        }
      }
    }

    return results;
  }

  function get_shape_by_name(ui, options) {
    var shape = shapeLibrary[options.shape_name];

    if (!shape) {
      return null;
    }

    return {
      id: options.shape_name,
      category: shape.category,
      style: shape.style,
      title: shape.title,
    };
  }

  function add_cell_of_shape(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;

    var shape_name = options.shape_name || "rectangle";
    var x = options.x || 100;
    var y = options.y || 100;
    var width = options.width || 120;
    var height = options.height || 80;
    var text = options.text || "";
    var style = options.style || "";

    // Ensure html=1 is always present for proper label rendering
    if (style.indexOf("html=") === -1) {
      style = style + "html=1;";
    }

    var shape_entry = get_shape_by_name(ui, { shape_name: shape_name });

    if (!shape_entry) {
      return null;
    }

    graph.getModel().beginUpdate();

    try {
      var cell = graph.insertVertex(
        graph.getDefaultParent(),
        null,
        text,
        x,
        y,
        width,
        height,
        shape_entry.style + ";" + style,
        false,
      );

      return cell;
    } finally {
      graph.getModel().endUpdate();
    }
  }

  function list_paged_model(ui, options) {
    if (!options) {
      options = {};
    }

    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var cells = model.cells;

    if (!cells) {
      return [];
    }

    function parse_style_attributes(style) {
      var attributes = {};

      if (!style) {
        return attributes;
      }

      var pairs = style.split(";");

      for (var i = 0; i < pairs.length; i++) {
        var parts = pairs[i].split("=");
        var key = parts[0];
        var valueParts = parts.slice(1);

        if (key && valueParts.length > 0) {
          attributes[key.trim()] = valueParts.join("=").trim();
        }
      }

      return attributes;
    }

    function extract_cell_attributes(cell) {
      var attributes = {};
      attributes.id = cell.id || "";
      attributes.edge = cell.edge || false;

      if (cell.style) {
        var styleAttrs = parse_style_attributes(cell.style);

        for (var k in styleAttrs) {
          if (styleAttrs.hasOwnProperty(k)) {
            attributes[k] = styleAttrs[k];
          }
        }
      }

      if (cell.value && typeof cell.value === "object" && cell.value.attributes) {
        var transformed = transform_cells_NamedNodeMap_to_attributes(cell);

        for (var k2 in transformed) {
          if (transformed.hasOwnProperty(k2)) {
            attributes[k2] = transformed[k2];
          }
        }
      }

      if (cell.value && typeof cell.value === "string") {
        attributes.text = cell.value;
      }

      return attributes;
    }

    function matches_cell_type(cell, cell_type) {
      switch (cell_type) {
        case "edge":
          return cell.edge === true || cell.edge === 1;
        case "vertex":
          return cell.edge === false;
        case "object":
          return cell.value && cell.value.nodeName === "object";
        case "group":
          return cell.style === "group";
        default:
          return true;
      }
    }

    var filtered_cells = Object.values(cells);

    if (options.filter) {
      var filter = options.filter;

      if (filter.cell_type) {
        filtered_cells = filtered_cells.filter(function (cell) {
          return matches_cell_type(cell, filter.cell_type);
        });
      }

      if (filter.ids && filter.ids.length > 0) {
        filtered_cells = filtered_cells.filter(function (cell) {
          return filter.ids.indexOf(cell.id) !== -1;
        });
      }
    }

    var page = Math.max(0, options.page || 0);
    var page_size = Math.max(1, options.page_size || 50);
    var start_index = page * page_size;

    var paginated_ids = filtered_cells.slice(start_index, start_index + page_size).map(function (c) {
      return c.id;
    });

    var transformed_cells = [];

    for (var i = 0; i < paginated_ids.length; i++) {
      var cell = cells[paginated_ids[i]];

      if (cell) {
        var sanitized_cell = remove_circular_dependencies(cell);
        transformed_cells.push(sanitized_cell);
      }
    }

    return transformed_cells;
  }

  function list_layers(ui) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var root = model.getRoot();
    var layers = [];

    for (var i = 0; i < model.getChildCount(root); i++) {
      var layer = model.getChildAt(root, i);

      if (layer) {
        layers.push({
          id: layer.getId(),
          name: layer.getValue() || "Layer " + i,
          visible: layer.isVisible(),
          locked: !layer.isConnectable(),
        });
      }
    }

    return layers;
  }

  function set_active_layer(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var layer = model.getCell(options.layer_id);

    if (!layer) {
      throw new Error("Layer with ID " + options.layer_id + " not found");
    }

    graph.setDefaultParent(layer);

    return {
      id: layer.getId(),
      name: layer.getValue() || "Unnamed Layer",
    };
  }

  function move_cell_to_layer(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();

    var cell = model.getCell(options.cell_id);
    var targetLayer = model.getCell(options.target_layer_id);

    if (!cell) {
      throw new Error("Cell with ID " + options.cell_id + " not found");
    }

    if (!targetLayer) {
      throw new Error("Target layer with ID " + options.target_layer_id + " not found");
    }

    model.beginUpdate();

    try {
      model.add(targetLayer, cell);
    } finally {
      model.endUpdate();
    }

    return {
      moved_cell: options.cell_id,
      to_layer: options.target_layer_id,
    };
  }

  function get_active_layer(ui) {
    var editor = ui.editor;
    var graph = editor.graph;
    var activeLayer = graph.getDefaultParent();

    return {
      id: activeLayer.getId(),
      name: activeLayer.getValue() || "Default Layer",
    };
  }

  function create_layer(ui, options) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var root = model.getRoot();

    model.beginUpdate();
    var newLayer;

    try {
      newLayer = new window.mxCell(options.name);
      newLayer.setId(null);
      model.add(root, newLayer);
    } finally {
      model.endUpdate();
    }

    return {
      id: newLayer.getId(),
      name: options.name,
    };
  }

  // =========================================================================
  // NEW tool handlers
  // =========================================================================

  function get_diagram_info(ui) {
    var editor = ui.editor;
    var graph = editor.graph;
    var model = graph.getModel();
    var root = model.getRoot();

    var cellCount = 0;

    for (var key in model.cells) {
      if (model.cells.hasOwnProperty(key)) {
        cellCount++;
      }
    }

    var layers = [];

    for (var i = 0; i < model.getChildCount(root); i++) {
      var layer = model.getChildAt(root, i);

      if (layer) {
        layers.push({
          id: layer.getId(),
          name: layer.getValue() || "Layer " + i,
          visible: layer.isVisible(),
        });
      }
    }

    var bounds = graph.getGraphBounds();
    var pageCount = 1;

    if (ui.pages) {
      pageCount = ui.pages.length;
    }

    var activePage = null;

    if (ui.currentPage) {
      activePage = ui.currentPage.getName ? ui.currentPage.getName() : null;
    }

    var fileName = null;

    if (editor.getFilename) {
      fileName = editor.getFilename();
    } else if (editor.filename) {
      fileName = editor.filename;
    }

    return {
      fileName: fileName,
      pageCount: pageCount,
      cellCount: cellCount,
      layers: layers,
      bounds: bounds
        ? {
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height,
          }
        : null,
      activePage: activePage,
    };
  }

  function get_diagram_screenshot(ui) {
    var editor = ui.editor;
    var mxUtils = window.mxUtils;
    var xml = mxUtils.getXml(editor.getGraphXml());

    return {
      format: "xml",
      data: xml,
    };
  }

  // =========================================================================
  // Tool handler map
  // =========================================================================

  var toolHandlerMap = {
    "get-selected-cell": {
      params: new Set([]),
      handler: function (ui) {
        return ui.editor.graph.getSelectionCell() || "no cell selected";
      },
    },
    "add-rectangle": {
      params: new Set(["x", "y", "width", "height", "text", "style"]),
      handler: add_new_rectangle,
    },
    "delete-cell-by-id": {
      params: new Set(["cell_id"]),
      handler: delete_cell_by_id,
    },
    "add-edge": {
      params: new Set(["source_id", "target_id", "style", "text"]),
      handler: add_edge,
    },
    "get-shape-categories": {
      params: new Set([]),
      handler: get_shape_categories,
    },
    "get-shapes-in-category": {
      params: new Set(["category_id"]),
      handler: get_shapes_in_category,
    },
    "get-shape-by-name": {
      params: new Set(["shape_name"]),
      handler: get_shape_by_name,
    },
    "add-cell-of-shape": {
      params: new Set(["x", "y", "width", "height", "text", "style", "shape_name"]),
      handler: add_cell_of_shape,
    },
    "set-cell-shape": {
      params: new Set(["cell_id", "shape_name"]),
      handler: set_cell_shape,
    },
    "set-cell-data": {
      params: new Set(["cell_id", "key", "value"]),
      handler: set_cell_data,
    },
    "list-paged-model": {
      params: new Set(["page", "page_size", "filter"]),
      handler: list_paged_model,
    },
    "edit-cell": {
      params: new Set(["cell_id", "text", "x", "y", "width", "height", "style"]),
      handler: edit_cell,
    },
    "edit-edge": {
      params: new Set(["cell_id", "text", "source_id", "target_id", "style"]),
      handler: edit_edge,
    },
    "list-layers": {
      params: new Set([]),
      handler: list_layers,
    },
    "set-active-layer": {
      params: new Set(["layer_id"]),
      handler: set_active_layer,
    },
    "move-cell-to-layer": {
      params: new Set(["cell_id", "target_layer_id"]),
      handler: move_cell_to_layer,
    },
    "get-active-layer": {
      params: new Set([]),
      handler: get_active_layer,
    },
    "create-layer": {
      params: new Set(["name"]),
      handler: create_layer,
    },
    "get-diagram-info": {
      params: new Set([]),
      handler: get_diagram_info,
    },
    "get-diagram-screenshot": {
      params: new Set([]),
      handler: get_diagram_screenshot,
    },
  };

  // =========================================================================
  // Plugin initialization
  // =========================================================================

  function initPlugin() {
    console.debug("[mcp-plugin] Loading Draw.io MCP Plugin...");

    var checkInterval = setInterval(function () {
      if (window.Draw) {
        clearInterval(checkInterval);

        window.Draw.loadPlugin(function (drawioUI) {
          console.debug("[mcp-plugin] Plugin loaded successfully");

          window.electron.registerMsgListener("mcpRequest", function (message) {
            var requestId = message.requestId;
            var toolName = message.toolName;
            var args = message.args || {};

            var toolDef = toolHandlerMap[toolName];

            if (!toolDef) {
              window.electron.sendMessage("mcpResponse", {
                requestId: requestId,
                result: null,
                error: "Unknown tool: " + toolName,
              });

              return;
            }

            var options = {};

            toolDef.params.forEach(function (key) {
              if (args[key] !== undefined) {
                options[key] = args[key];
              }
            });

            try {
              var result = toolDef.handler(drawioUI, options);
              var sanitized = remove_circular_dependencies(result);

              window.electron.sendMessage("mcpResponse", {
                requestId: requestId,
                result: sanitized,
                error: null,
              });
            } catch (err) {
              console.error("[mcp-plugin] Tool " + toolName + " failed for request " + requestId + ":", err);

              window.electron.sendMessage("mcpResponse", {
                requestId: requestId,
                result: null,
                error: err.message || String(err),
              });
            }
          });

          console.info("[mcp-plugin] MCP Plugin fully initialized");
        });
      }
    }, 500);
  }

  if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initPlugin);
    } else {
      initPlugin();
    }
  }
})();
