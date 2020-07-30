import { Plug } from 'grommet-icons';

export const power = [
  {
    title: '720 Watt Service',
    subTitle: '3 Power Supplies',
    action: 'Manage Power',
    status: 'Stable',
    icon: <Plug size="xlarge" />,
  },
  {
    title: 'Power Supply 1',
    content: [
      { key: 'Bay', value: 1 },
      { key: 'status', value: 'stable' },
      { key: 'PDS', value: 'No' },
      { key: 'Model', value: '837074-B21' },
      { key: 'Serial Number', value: 'SFKYDV2LL6127Z' },
      { key: 'Capacity', value: '240 Watts' },
      { key: 'Firmware', value: '0.11' },
    ],
  },
  {
    title: 'Power Supply 2',
    content: [
      { key: 'Bay', value: 2 },
      { key: 'status', value: 'stable' },
      { key: 'PDS', value: 'No' },
      { key: 'Model', value: '121084-B35' },
      { key: 'Serial Number', value: 'FTCYDV2LL6127Z' },
      { key: 'Capacity', value: '240 Watts' },
      { key: 'Firmware', value: '0.11' },
    ],
  },
];
