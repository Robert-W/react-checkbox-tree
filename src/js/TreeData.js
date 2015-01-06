module.exports = [
	{id:'A', label: 'A', checked: true},
  {id:'B',label: 'B'},
  {id:'C',label: 'C', checked: true,
    children: [
        {id:'C-A',label: 'C-A'},
        {id:'C-B',label: 'C-B'},
        {id:'C-C',label: 'C-C',
          children: [
              {id:'C-C-A',label: 'C-C-A'},
              {id:'C-C-B',label: 'C-C-B'},
              {id:'C-C-C',label: 'C-C-C', checked: true}
          ]
        }
    ]
  },
  {id:'D',label: 'D'}
];