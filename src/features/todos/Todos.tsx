import { useState } from 'react'
import { Button, Card, Stack, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { initialTodos, TodosType } from '@/features/todos/data.ts'
import { addTestKey } from '@/utils/test-keys.ts'

export default function Todos() {
  const [todos, setTodos] = useState<Record<number, TodosType>>(initialTodos)
  const [filter, setFilter] = useState<'All' | 'Done' | 'Todo'>('All')
  const [newTodo, setNewTodo] = useState<string>('')

  const { t } = useTranslation()

  const handleToggle = (value: number) => () => {
    setTodos((prevState) => {
      const updatedTodo = { ...prevState[value], done: !prevState[value].done }
      return { ...prevState, [value]: updatedTodo }
    })
  }

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return

    const nextId = Math.max(...Object.keys(todos).map(Number)) + 1

    setTodos((prevState) => ({
      ...prevState,
      [nextId]: { text: newTodo, done: false },
    }))
    setNewTodo('')
  }

  const handleRemoveFinished = () => {
    setFilter('All')
    setTodos((prevState) =>
      Object.fromEntries(
        Object.entries(prevState).filter(([_, todo]) => !todo.done),
      ),
    )
  }

  const filteredTodos = Object.entries(todos).filter(([_, todo]) => {
    if (filter === 'Done') return todo.done
    if (filter === 'Todo') return !todo.done
    return true
  })

  return (
    <Box sx={{ mx: 'auto', maxWidth: '20rem' }}>
      <Typography my={1} variant="h4" textAlign={'center'}>
        {t('Todos')}
      </Typography>
      <Card>
        <Stack direction={'row'} spacing={1} px={2} pt={2}>
          <TextField
            {...addTestKey('input')}
            fullWidth
            size="small"
            label={t('newTodo')}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddTodo()
            }}
          />
          <Button
            {...addTestKey('add')}
            variant="contained"
            onClick={handleAddTodo}
          >
            {t('Add')}
          </Button>
        </Stack>
        <List sx={{ width: '100%' }}>
          {filteredTodos.map(([key, todo]) => {
            const labelId = `checkbox-list-label-${key}`
            const numberKey = Number(key)
            return (
              <ListItem key={key} disablePadding>
                <ListItemButton
                  {...addTestKey('item')}
                  onClick={handleToggle(numberKey)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={todos[numberKey].done}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textDecoration: todo.done ? 'line-through' : 'none',
                      opacity: todo.done ? 0.6 : 1,
                    }}
                    id={labelId}
                    primary={todo.text}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
        <Stack direction={'row'} spacing={1} pb={1} px={2}>
          {(['All', 'Done', 'Todo'] as const).map((item) => (
            <Button
              {...addTestKey(item)}
              fullWidth
              variant={filter === item ? 'contained' : 'outlined'}
              onClick={() => setFilter(item)}
            >
              {t(item)}
            </Button>
          ))}
        </Stack>
        <Box pb={2} px={2}>
          <Button
            {...addTestKey('remove')}
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleRemoveFinished}
          >
            {t('removeFinished')}
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
