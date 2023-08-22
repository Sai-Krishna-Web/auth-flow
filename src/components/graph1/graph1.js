import React from 'react';
import Graphin, { Utils, Behaviors, Components } from '@antv/graphin';

const { Tooltip } = Components;
const { TreeCollapse } = Behaviors;
const data = Utils.mock(20).tree().graphinTree();

console.log('g1', data);

export default function Graph1() {

    const walk = (node, callback) => {
        callback(node);
        if (node.children && node.children.length > 0) {
          node.children.forEach(child => {
            walk(child, callback);
          });
        }
      };
      
      walk(data, node => {
        node.style = {
          label: {
            value: node.id,
          },
        };
      });

    const layout =
    {
        type: 'compactBox',
    options: {
      direction: 'LR',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 26;
      },
      getWidth: function getWidth() {
        return 26;
      },
      getVGap: function getVGap() {
        return 26;
      },
      getHGap: function getHGap() {
        return 100;
      },
    },
        title: 'Graph1',
    };
    //const desc = <code>{`type:${layout.type}`}</code>;
console.log('g1', data);
    return (
        <div style={{height:'100%'}}>
            <h4>Click  to collapse and expand node, hover to view node details</h4>
            <Graphin data={data} layout={layout} fitView>
                <TreeCollapse />

                <Tooltip bindType="node" placement={'top'} hasArrow={true} style={{"background":"#fff",
    "width":"200px"}}>
          {(value) => {
            if (value.model) {
              const { model } = value;
              return (
                <div style={{paddingBottom:'20px'}}>
                    <h4> {model.id}</h4>
                    {model.children.length>0 &&  <span>Child nodes({model.children.length}):</span>}
                    {model.children && model.children.map((child)=>
                        <li> {child.id}</li>
                    )}
                  
                </div>
              );
            }
            return null;
          }}
        </Tooltip>
            </Graphin>

        </div>
    );
};