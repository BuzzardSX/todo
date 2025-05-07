interface TableProps<T> {
	data: T[];
}

const Table = <T,>({ data }: TableProps<T>) => (
	<table>
		<thead></thead>
		<tbody></tbody>
		<tfoot></tfoot>
	</table>
);

export default Table;
