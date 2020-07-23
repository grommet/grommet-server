import { Memory, Storage, Plug } from 'grommet-icons';

export const sensors = [
  {
    icon: <Memory size="large" />,
    title: 'Memory (EEC)',
    subTitle: '8 GB @ 400Hz',
    message: 'Past 24hrs',
    type: 'line',
  },
  {
    icon: <Storage size="large" />,
    title: 'Storage',
    subTitle: 'Sub-system and Devices',
    message: '36.8 TB available',
    type: 'bar',
  },
  {
    icon: <Plug size="large" />,
    title: 'Power (Watts)',
    subTitle: '720 Watt Service',
    message: 'Past 12hrs',
    type: 'point',
  },
];
