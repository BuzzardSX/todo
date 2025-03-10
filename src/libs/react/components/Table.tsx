const Table = <T,>({ data }: TableProps<T>) => {
	return (
		<table>
			<thead></thead>
			<tbody></tbody>
			<tfoot></tfoot>
		</table>
	);
};

export interface TableProps<T> {
	data: T[];
}

export default Table;
