export const Participante = ({
  nome,
  sobrenome,
  foto = "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  link = "https://lepixifpa.github.io/",
}: any) => {
  return (
    <div>
      <a href={link}>
        <img src={foto} alt="" width="120px" height="120px" />
        {nome}
        <br />
        {sobrenome}
      </a>
    </div>
  );
};
