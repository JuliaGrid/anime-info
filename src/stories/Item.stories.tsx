import type { StoryObj } from '@storybook/react-vite';
import { Item } from '../components/Item';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Item',
  component: Item,
};

export default meta;
type Story = StoryObj<typeof meta>;

const animeItem = {
  title: '',
  image_url: '',
  status: '',
  year: 0,
  score: 0,
  members: 0,
  episodes: 0,
  genres: ['', ''],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    animeItem: animeItem,
  },
};

export const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props

  return <Item animeItem={animeItem} />;
};
