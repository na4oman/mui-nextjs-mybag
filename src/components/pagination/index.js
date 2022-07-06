import { Box, Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import service from '../../services'

const pageSize = 3

export default function AppPagination({ setProducts }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  })

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then(response => {
        setPagination({ ...pagination, count: response.count })
        setProducts(response.data)
      })
  }, [pagination.from, pagination.to])

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize
    const to = (page - 1) * pageSize + pageSize

    setPagination({
      ...pagination,
      from,
      to,
    })
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' my={7}>
      <Pagination
        color='primary'
        count={Math.ceil(pagination.count / pageSize)}
        // page={page}
        onChange={handlePageChange}
      />
    </Box>
  )
}
