export default function getInitials(name) {
  const result = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return result;
}
