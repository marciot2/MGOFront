import { Box, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FileUpload from "react-material-file-upload";
import LiveTvIcon from '@mui/icons-material/LiveTv';



interface FormInput {
  image: [];
}

const MyForm = () => {
  const { control, handleSubmit } = useForm<FormInput>();

  const onSubmit = ({ image }: FormInput) => {
    console.log(image);
  };

  return (
    <Box
      component="form"
      sx={{ paddingTop: 1 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        render={({ field: { value, onChange } }) => (
          <FileUpload
            value={value}
            onChange={onChange}
            multiple={true}
            accept={["video/mp4", "video/mpeg"]}
            title="Clique para selecionar ou arraste os videos"
            buttonText="Selecione o video"
            maxSize={7340032000}
            buttonProps={{
              variant: "outlined"
            }}
            typographyProps={{
              variant: "body2",
              color: "textSecondary"
            }}
          />
        )}
        control={control}
        name="image"
      />
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Button type="submit" variant="contained" startIcon={<LiveTvIcon/>} >
                                                  
        Incluir Video
        </Button>
      </Box>
    </Box>
  );
};

export default MyForm;
