import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RootFinder.scss';

type MethodType = 'Bisection Method' | 'Newtons Method' | 'Secant Method';

type FormData = {
    method: MethodType;
    leftBound?: number;
    rightBound?: number;
    p0?: number;
    p1?: number;
    function: string;
    tolerance: number;
    maxIterations: number;
};


const MAX_ITERATIONS = 10000;
export function RootFinderForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        method: 'Bisection Method',
        function: '',
        tolerance: 0,
        maxIterations: MAX_ITERATIONS,
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            let updatedFormData = { ...prevFormData, [name]: value };

            // Clear out any old values for fields that depend on the method chosen
            if (name === 'method') {
                updatedFormData = {
                    ...updatedFormData,
                    leftBound: undefined,
                    rightBound: undefined,
                    p0: undefined,
                    p1: undefined,
                };
            }

            return updatedFormData;
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleHomeClick = () => {
        navigate('/');
      };
    
    const { method, leftBound, rightBound, p0, p1, function: func, tolerance, maxIterations } = formData;

    return (
        <div className="root-finder-form-wrapper">
             <button className="home-button" onClick={handleHomeClick}>
        Home
      </button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="method-select">Select method:</label>
                    <select id="method-select" name="method" value={method} onChange={handleFormChange}>
                        <option value="Bisection Method">Bisection Method</option>
                        <option value="Newtons Method">Newtons Method</option>
                        <option value="Secant Method">Secant Method</option>
                    </select>
                </div>

                {method === 'Bisection Method' && (
                    <>
                        <div>
                            <label htmlFor="left-bound-input">Left bound:</label>
                            <input
                                type="number"
                                id="left-bound-input"
                                name="leftBound"
                                value={leftBound ?? ''}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="right-bound-input">Right bound:</label>
                            <input
                                type="number"
                                id="right-bound-input"
                                name="rightBound"
                                value={rightBound ?? ''}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                    </>
                )}

                {method === 'Newtons Method' && (
                    <div>
                        <label htmlFor="p0-input">p0:</label>
                        <input type="number" id="p0-input" name="p0" value={p0 ?? ''} onChange={handleFormChange} required />
                    </div>
                )}

                {method === 'Secant Method' && (
                    <>
                        <div>
                            <label htmlFor="p0-input">p0:</label>
                            <input type="number" id="p0-input" name="p0" value={p0 ?? ''} onChange={handleFormChange} required />
                        </div>

                        <div>
                            <label htmlFor="p1-input">p1:</label>
                            <input type="number" id="p1-input" name="p1" value={p1 ?? ''} onChange={handleFormChange} required />
                        </div>
                    </>
                )}
                <div>
                    <label htmlFor="function-input">Function:</label>
                    <input
                        type="text"
                        id="function-input"
                        name="function"
                        value={func}
                        onChange={handleFormChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="tolerance-input">Tolerance:</label>
                    <input
                        type="number"
                        id="tolerance-input"
                        name="tolerance"
                        value={tolerance}
                        onChange={handleFormChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="max-iterations-input">Max iterations:</label>
                    <input
                        type="number"
                        id="max-iterations-input"
                        name="maxIterations"
                        value={maxIterations}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                maxIterations: Math.min(parseInt(event.target.value, 10), MAX_ITERATIONS),
                            })
                        }
                        required
                    />
                </div>

                <button type="submit">Find root</button>
            </form>
        </div>
    );
};
export default RootFinderForm;