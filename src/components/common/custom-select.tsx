import React, { LegacyRef } from 'react';

export interface IProp {
}

export const Select = React.forwardRef(({errors, onChange, onBlur, name, controlLabel, selectDataSource, ...rest }: any, ref: any) => (
	<>
		<label>{controlLabel}</label>
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
			{selectDataSource.map((o: {key: string, value: string}) => <option key={o.key} value={o.key} >{o.value}</option>)}
		</select>
		<span style={{ color: 'red' }}>
			{/* {errors[name]?.type === 'required' && "Premium Strategies"} */}
		</span>
	</>
));
