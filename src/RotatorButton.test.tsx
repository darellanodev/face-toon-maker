import {render, screen} from '@testing-library/react';
import RotatorButton from './RotatorButton';

describe('RotatorButton', () => { 
    it('it renders a <button>', () => {
        render(<RotatorButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});