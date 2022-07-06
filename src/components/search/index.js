import { IconButton, Slide } from '@mui/material'
import { useUIContext } from '../../context/ui'
import { SearchBoxContainer, SearchField } from '../../styles/search'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

export default function Search() {
  const { showSearchBox, setShowSearchBox } = useUIContext()

  return (
    <Slide direction='down' in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color='secondary'
          variant='standard'
          fullWidth
          placeholder='search...'
        />
        <IconButton>
          <SearchIcon
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
            color='secondary'
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon
            sx={{
              fontSize: { xs: '3rem', md: '3.5rem' },
            }}
            color='secondary'
          />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  )
}
