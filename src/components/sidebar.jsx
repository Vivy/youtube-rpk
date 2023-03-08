import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',

        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((cat) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(cat.name)}
          key={cat.name}
          style={{
            background: cat.name === selectedCategory && '#FC1503',
            color: 'white',
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{
              opacity: cat.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
