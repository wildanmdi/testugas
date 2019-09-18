import React, { Component } from 'react';
import './Content.css';

export default class Components extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    key: "MISI",
                    value: "N/A",
                },
                {
                    key: "TUJUAN",
                    value: "N/A",
                }, {
                    key: "SASARAN",
                    value: "N/A",
                }, {
                    key: "INDIKATOR",
                    value: "N/A",
                },
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.data.map((item, index) => {
                    return (
                        <data key={item.key} value={item.value} />
                    )
                })}


                <div className="wrapper-export">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <div class="button">
                        <ul class="left">
                            <a href="#">2022-2026</a>
                            
                        </ul>

                    </div>

                    <button className="button-export">
                        <span className="font-e"><i class="fa fa-download" aria-hidden="true"></i>
                            EXPORT
              </span>
                    </button>
                </div>

                <div className="wrapper-print">
                    <button className="button-print">
                        <span className="font-p"><i class="fa fa-print" aria-hidden="true"></i>
                            PRINT
                  </span>
                    </button>
                </div>



                <table>
                    <tr>
                        <th>MISI <button>+</button></th>
                        <th>TUJUAN <button>+</button></th>
                        <th>SASARAN <button>+</button></th>
                        <th>INDIKATOR <button>+</button></th>
                        <th>KONDISI AWAL TAHUN 2021</th>
                        <th>KONDISI AKHIR TAHUN 2026</th>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>

                </table>
            </div>
        )
    }
}
