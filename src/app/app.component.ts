import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from "@ag-grid-community/core";

class GridModel {
  col1?: number;
  col2?: number;
  col3?: string;
  col4?: string;
  col5?: string;
  col6?: string;
  col7?: string;
  col8?: Date;
  col9?: string;
  col10?: Date;
  col11?: string;
  col12?: string;
  col13?: Date;
  col14?: number;
  col15?: number;
  col16?: number;
  col17?: number;
  col18?: string;
  col19?: string;
  col20?: string;
  col21?: number;
  col22?: number;
  col23?: string;
  col24?: string;
  col25?: string;
  col26?: number;
  col27?: Date;
  col28?: string;
  col29?: string;
  col30?: string;
  col31?: string;
  col32?: string;
  col33?: string;
  col34?: string;
  col35?: string;
  col36?: string;
  col37?: string;
  col38?: string;
  col39?: string;
  col40?: string;
  col41?: string;
  col42?: number;
  col43?: string;
  col44?: string;
  col45?: string;
  col46?: number;
  col47?: number;
  col48?: number;
  col49?: number;
  col50?: string;
  col51?: number;
  col52?: string;
  col53?: string;
  col54?: boolean;
  col55?: number;
  col56?: string;
  col57?: string;
  col58?: number;
  col59?: string;
  col60?: string;
  col61?: string;
  col62?: number;
  col63?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  // Row Data: The data to be displayed.
  rowData: GridModel[] = [];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    {
      headerName: 'Column 1',
      field: 'col1',
      colId: 'col1'
    },
    {
      headerName: 'Column 2',
      field: 'col2',
      colId: 'col2'
    },
    {
      headerName: 'Column 3',
      field: 'col3',
      colId: 'col3'
    },
    {
      headerName: 'Column 4',
      field: 'col4',
      colId: 'col4'
    },
    {
      headerName: 'Column 5',
      field: 'col5',
      colId: 'col5'
    },
    {
      headerName: 'Column 6',
      field: 'col6',
      colId: 'col6'
    },
    {
      headerName: 'Column 7',
      field: 'col7',
      colId: 'col7'
    },
    {
      headerName: 'Column 8',
      colId: 'col8',
      field: 'col8',
    },
    {
      headerName: 'Column 9',
      field: 'col9',
      colId: 'col9'
    },
    {
      headerName: 'Column 10',
      colId: 'col10',
      field: 'col10'
    },
    {
      headerName: 'Column 11',
      field: 'col11',
      colId: 'col11'
    },
    {
      headerName: 'Column 12',
      field: 'col12',
      colId: 'col12'
    },
    {
      headerName: 'Column 13',
      field: 'col13',
      colId: 'col13'
    },
    {
      headerName: 'Column 14',
      field: 'col14',
      colId: 'col14'
    },
    {
      headerName: 'Column 15',
      field: 'col15',
      colId: 'col15'
    },
    {
      headerName: 'Column 16',
      field: 'col16',
      colId: 'col16'
    }
  ];

  private gridApi?: GridApi;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    setInterval(() => {
      const newData: GridModel[] = [];
      for (let i = 0; i < 1000; i++) {
        newData.push({
          col1: Math.round(Math.random() * 20),
          col2: Math.round(Math.random() * 12),
          col3: 'col' + Math.round(Math.random() * 5),
          col4: 'col' + Math.round(Math.random() * 5),
          col5: Math.random() > 0.5 ? 'big' : 'small',
          col8: new Date(),
          col14: Math.round(Math.random() * 3)
        });
      }
      this.gridApi?.setRowData(newData);
    }, 3000);
  }
}
