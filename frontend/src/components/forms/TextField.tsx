import { type InputHTMLAttributes, forwardRef } from "react";

export const TextField = forwardRef(
	(
		props: {
			label: string;
			type?: string;
			placeholder: string;
			error?: string;
		} & InputHTMLAttributes<any>,
		ref,
	) => {
		const { label, type, placeholder, error, ...rest } = props;

		return (
			<div className="grid">
				<label htmlFor={label}>{label}</label>
				<input
					{...rest}
					type={type || "text"}
					ref={ref}
					placeholder={placeholder}
					className="p-2 border-slate-200 outline-slate-200 border-solid border-2"
				/>
				<p className="text-orange-600">{error}</p>
			</div>
		);
	},
);
