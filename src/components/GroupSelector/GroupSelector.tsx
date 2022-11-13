import styles from "./GroupSelector.module.css";

const GroupSelector = ({ options, value, onChange }) => {
  return (
    <div className={styles.root}>
      {options?.map((o) => (
        <button onClick={() => onChange(o)} aria-pressed={value === o}>
          {o}
        </button>
      ))}
    </div>
  );
};

export default GroupSelector;
