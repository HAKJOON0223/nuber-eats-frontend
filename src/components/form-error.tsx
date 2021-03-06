import React from 'react';

interface IFormErrorProps {
	errorMessage: string | undefined;
}

function FormError({ errorMessage }: IFormErrorProps) {
	return (
		<span role="alert" className="font-medium text-red-500">
			{errorMessage}
		</span>
	);
}

export default FormError;
