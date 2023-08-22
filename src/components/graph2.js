import Graphin, { Components } from '@antv/graphin';
import * as React from 'react';

import mockData from '../mocks/graph2Mock';

const { Legend } = Components;
const colors = [
    '#BDD2FD',
    '#BDEFDB',
    '#FBE5A2',
    '#F6C3B7',
    '#B6E3F5',
    '#D3C6EA',
    '#FFD8B8',
    '#AAD8D8',
    '#FFD6E7',
];
const strokes = [
    '#5B8FF9',
    '#5AD8A6',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
];

const clusterMap = new Map();
let clusterId = 0;

mockData.nodes.forEach((node) => {
    if (node.cluster && clusterMap.get(node.cluster) === undefined) {
        clusterMap.set(node.cluster, clusterId);
        clusterId++;
    }
    const cid = clusterMap.get(node.cluster);
    if (!node.style) {
        node.style = {};
    }

    const iconType = node.cluster;
    node.data = {
        type: iconType,
    };
    node.type = 'graphin-circle';
    node.style = {
        keyshape: {
            size: 30,
            stroke: strokes[cid % strokes.length],
            fill: colors[cid % colors.length],
            fillOpacity: 0.2,
        },
        icon: {
            type: 'font',
            fontFamily: 'graphin',
            value: node.label,
            size: 14,
            fill: strokes[cid % strokes.length],
        },
    };
    node.style.fill = colors[cid % colors.length];
    node.style.stroke = strokes[cid % strokes.length];
});

mockData.edges.forEach(edge => {
    edge.cluster = mockData.nodes[+edge.source].cluster;
    const cid = clusterMap.get(edge.cluster);
    console.log(edge.cluster, cid)
    if (!edge.style) {
        edge.style = {};
    }
    edge.style = {keyshape:{
      stroke: colors[cid % colors.length],
      fill: colors[cid % colors.length]
    }}
    edge.style.fill = colors[cid % colors.length];
    
  })


const onChange = (checkedValue, options) => {
    console.log(checkedValue, options);
};
console.log( mockData);
const Graph2 = () => {
    return (
        <Graphin data={mockData} fitView>
            <Legend bindType="node" sortKey="data.type" style={{top:'40px', right:'40px', backgroundColor:'#616161'}}>
                {(renderProps) => {
                    return <Legend.Node {...renderProps} onChange={onChange} />;
                }}
            </Legend>
        </Graphin>
    );
};

export default Graph2;