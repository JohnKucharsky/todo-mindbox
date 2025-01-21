import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import { ButtonGroup } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { $themeName, handleChangeTheme } from '@/layout/store.ts'
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts'

export default function DarkModePicker() {
  const themeName = useAppSelector($themeName)
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const colorAndOpacity = (inputTheme: 'dark' | 'light') => {
    if (themeName === inputTheme) {
      return {
        opacity: 1,
        color: 'primary',
      } as const
    }

    return {
      opacity: 0.2,
      color: 'inherit',
    } as const
  }

  return (
    <Box textAlign={'center'} mt={2}>
      <ButtonGroup>
        <Button
          onClick={() => dispatch(handleChangeTheme('light'))}
          color={colorAndOpacity('light').color}
          sx={{
            opacity: colorAndOpacity('light').opacity,
          }}
          startIcon={<LightModeIcon />}
        >
          {t('Light')}
        </Button>
        <Button
          onClick={() => dispatch(handleChangeTheme('dark'))}
          color={colorAndOpacity('dark').color}
          sx={{
            opacity: colorAndOpacity('dark').opacity,
          }}
          startIcon={<DarkModeOutlinedIcon />}
        >
          {t('Dark')}
        </Button>
      </ButtonGroup>
    </Box>
  )
}
