import React from 'react';
import { storiesOf } from '@storybook/react';
import {colors}  from "../componentlib";

storiesOf('colors', module)
  .add('pallets', () => (
    <table style={{width:'100%',border:'none'}}>
        <tr style={{border:'none'}}>
            <th style={{border:'none'}}>Color</th>
            <th style={{border:'none'}}>Key</th>
            <th style={{border:'none'}}>Hex Code/RGBA</th>
        </tr>
        {
            Object.keys(colors).map(name=>{
                return (
                    <tr style={{border:'none'}}>
                        <td style={{border:'none'}}>
                            <div style={{width:'50px',height:'50px',background:`${colors[name]}`,borderRadius:'4px'}}/>
                        </td>
                        <td style={{border:'none'}}>
                            <code style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#4b4b4b',
                                    textAlign:'left'
                                    }}>{name}</code>
                        </td>
                        <td style={{border:'none'}}>
                            <code>{colors[name]}</code>
                        </td>
                    </tr>
                )
            })
        }
    </table>
  ));