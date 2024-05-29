"use client"
import React from 'react'
import 'iconify-icon';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import { Input } from '@mui/joy';
import { useRouter } from 'next/navigation';

const Search = ({ sx }) => {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const handleSearch = (data) => {
		const query = data.get("search")
		if(!query)
			return ;
		router.push(`/search?q=${query}`)
		setOpen(false);
	}
	return (
		<>
			<IconButton sx={{ ":hover": { color: "black" }, color: "white" }} onClick={() => setOpen(true)}>
				<iconify-icon icon="iconamoon:search-fill"></iconify-icon>
			</IconButton>
			<Modal
				aria-labelledby="modal-title"
				aria-describedby="modal-desc"
				open={open}
				onClose={() => setOpen(false)}
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<Sheet
					variant="outlined"
					sx={{
						maxWidth: 500,
						borderRadius: 'md',
						p: 3,
						boxShadow: 'lg',
					}}
				>
					<ModalClose variant="plain" sx={{ m: 1 }} />
					<Stack sx={sx}>
						<form action={handleSearch}>
							<Input
								name='search'
								placeholder="Search anything"
							/>
						</form>
					</Stack>
				</Sheet>
			</Modal>

		</>


	)
}

export default Search