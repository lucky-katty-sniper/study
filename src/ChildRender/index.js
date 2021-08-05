import Child from './Child';

export default function Parent() {
    console.log('call Parent');
    return <>
    <div>Parent</div>
    <Child />
    </>;
}