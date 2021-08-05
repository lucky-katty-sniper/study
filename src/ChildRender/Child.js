import SubChild from './SubChild';

export default function Child() {
    console.log('call Child');
    return <>
    <div>Child</div>
    <SubChild />
    </>;
}