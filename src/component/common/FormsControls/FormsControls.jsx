import s from './FormsControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : null}`}>
            <textarea {...props} {...input} />
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    );
};