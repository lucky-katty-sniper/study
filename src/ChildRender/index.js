import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Child from './Child';

export default function Parent() {
    const [restate, setRestate] = useState(true);

    console.log(new Date(), 'call Parent', restate);

    useEffect(() => {
        console.log(new Date(), 'call Parent useEffect', restate);
    });
    useEffect(() => {
        console.log(new Date(), 'call Parent useEffect with []');
    }, []);
    useEffect(() => {
        console.log(new Date(), 'call Parent useEffect with [restate]', restate);
    }, [restate]);

    return <>
        <div>Parent</div>
        <Button onClick={() => {setRestate(prev => !prev)}}>restate</Button>
        <Child />
    </>;
}