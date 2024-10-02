import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	id: number;
	name: string;
	email: string;
}

type UserToBeAdded = Omit<User, 'id'>;

type UsersState = User[];

const initialState: UsersState = [];

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserToBeAdded>) => {
			const userToBeAdded: User = {
				...action.payload,
				id: state.length + 1
			};

			state.push(userToBeAdded);
		}
	}
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
