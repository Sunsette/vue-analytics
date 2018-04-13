export default class ViewService {
  static getTiles() {
    return [{
      id: 1,
      header: 'First tile!',
      type: 'LineChart',
      columns: [{
        type: 'string',
        label: 'Year',
      }, {
        type: 'number',
        label: 'Sales',
      }, {
        type: 'number',
        label: 'Expenses',
      }],
      rows: [
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540],
      ],
      options: {
        hAxis: {
          title: 'Year',
          minValue: '2004',
          maxValue: '2007',
        },
        vAxis: {
          title: '',
          minValue: 300,
          maxValue: 1200,
        },
        width: '100%',
        height: '100%',
        curveType: 'function',
        colors: ['#20a0ae', '#49cbda', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      },
    }, {
      id: 2,
      header: 'Second tile!',
      type: 'BarChart',
      columns: [{
        type: 'string',
        label: 'Year',
      }, {
        type: 'number',
        label: 'Sales',
      }, {
        type: 'number',
        label: 'Expenses',
      }],
      rows: [
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540],
      ],
      options: {
        hAxis: {
          title: 'Year',
          minValue: '2004',
          maxValue: '2007',
        },
        vAxis: {
          title: '',
          minValue: 300,
          maxValue: 1200,
        },
        width: '100%',
        height: '100%',
        curveType: 'function',
        colors: ['#20a0ae', '#49cbda', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      },
    }];
  }
}
